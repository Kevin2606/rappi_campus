import { SignJWT, jwtVerify } from "jose"
import dotenv from 'dotenv';
dotenv.config();

const crearToken = async (id, rol) => {
    const encoder = new TextEncoder();
    const jwtConstructor = await new SignJWT({ id, rol})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_SECRET));
    return jwtConstructor;
}

const validarToken = async (token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        );
        //TODO: Retornar el usuario que corresponde al token y agregar el rol del usuario a req.user.rol
    } catch (error) {
        return false;
    }
}

export {
    crearToken,
    validarToken
}