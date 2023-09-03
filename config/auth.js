import { unless } from "express-unless";
import connect from "../db/connectDB.js";
import {
    readConfigFile,
    mapPolicyToGroup,
    findRoleFromRequest,
    findPermissionForRoute,
    checkIfHasAccess,
    deny,
} from "./auth_aux.js";

let options = {
    path: ".",
    filename: "nacl.json",
    policies: new Map(),
    defaultRole: "guest",
};

async function config(config, response) {
    const db = (await connect()).db().collection("roles");
    const roles = await db.find().toArray();
    config = {
        filename: roles,
        baseUrl: "/",
        roleSearchPath: "user.rol",
        denyCallback: (res) =>
            res.status(403).json({
                message: "No tienes permisos para acceder a este recurso",
            }),
    };

    options = Object.assign({}, options, config, { response });
    if (config && config.rules) {
        options.policies = mapPolicyToGroup(config.rules);
    } else {
        options.policies = mapPolicyToGroup(readConfigFile(options.filename));
    }

    if (!options.policies.size) {
        return "\u001b[33mWARNING: You have not set any policies, All traffic will be denied\u001b[39m";
    }
    return options.policies;
}

/**
 * [authorize Express middleware]
 * @param  {[type]}   req  [Th request object]
 * @param  {[type]}   res  [The response object]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */

function authorize(req, res, next) {
    const role = findRoleFromRequest(
        req,
        options.roleSearchPath,
        options.defaultRole,
        options.decodedObjectName
    );

    if (req.originalUrl === "/") {
        return next();
    }

    const policy = options.policies.get(role);

    if (!policy) {
        return res.status(403).json({
            status: "Access denied",
            success: false,
            message: `REQUIRED: Policy for role ${role} is not defined`,
        });
    }

    const permission = findPermissionForRoute(
        req.originalUrl,
        req.method,
        options.baseUrl,
        policy
    );

    if (!permission) {
        if (typeof options.denyCallback === "function") {
            return options.denyCallback(res);
        }
        return res
            .status(403)
            .json(deny(options.customMessage, options.response));
    }

    return checkIfHasAccess(
        req.method,
        res,
        next,
        permission,
        options.customMessage,
        options.response,
        options.denyCallback
    );
}

authorize.unless = unless;

export { config, authorize };
