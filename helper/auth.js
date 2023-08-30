import bcrypt from "bcrypt";
import AuthModel from "../model/auth";


const login = async ({email, password}, collection) => {
    try {
        if (!email || !password)
            throw { status: 400, message: "Faltan datos" };
        const user = await AuthModel.login(email, collection);
        if (!user)
            throw { status: 400, message: "Usuario no encontrado" };
        const valid = await bcrypt.compare(password, user.password);
        if (!valid)
            throw { status: 400, message: "Contraseña incorrecta" };
        return user;
    } catch (error) {
        return error;
    }
};

const register = async (body, collection) => {
    try {
        if (!body.email || !body.password)
            throw { status: 400, message: "Faltan datos" };
        body.password = await bcrypt.hash(body.password, 10);
        const user = await AuthModel.register(body, collection);
        return user;
    } catch (error) {
        return error;
    }
};

export { login, register };