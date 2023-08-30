import connect from "../db/connectDB.js";
import getNextSequenceValue from "../helper/counter.js";

const db = (await connect())


export default class AuthModel {
    static async register(user, collection) {
        try {
            const con = db.collection(collection);
            user.id_usuario = await getNextSequenceValue("usuarios");
            return await con.insertOne(user);
        } catch (error) {
            console.log(error);
            if (error.code === 11000)
                return {
                    status: 400,
                    message: `${Object.keys(error.keyValue)[0]}: Ya registrado en el sistema`,
                };
            return { status: 400, message: "Error validacion fallida" };
        }
    }

    static async login(email, collection) {
        try {
            const con = db.collection(collection);
            const getUser = await con.findOne({ correo: email });
            return getUser;
        } catch (error) {
            return { status: 400, message: "Usuario no encontrado" };
        }
    }
}