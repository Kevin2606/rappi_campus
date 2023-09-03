import bcrypt from "bcrypt";
import AuthModel from "../model/auth.js";


const login = async ({correo, contrasena}, collection) => {
    try {
        if (!correo || !contrasena)
            throw { status: 400, message: "Faltan datos" };

        const user = await AuthModel.login(correo, collection);

        if (!user)
            throw { status: 400, message: "Usuario no encontrado" };

        const valid = await bcrypt.compare(contrasena, user.contrasena);
        if (!valid)
            throw { status: 400, message: "Contraseña incorrecta" };
        return user;

    } catch (error) {
        return Promise.reject(error); 
    }
};

const register = async (body, collection) => {
    try {        
        body.contrasena = await bcrypt.hash(body.contrasena, 10);
        const user = await AuthModel.register(body, collection);               
        return user;
    } catch (error) {
        return Promise.reject(error); 
    }
};

export { login, register };