import { SignJWT, jwtVerify } from "jose"
import dotenv from 'dotenv';
dotenv.config();

const crearToken = async (req, res) => {
    const encoder = new TextEncoder();
    const jwtConstructor = await new SignJWT({ id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_SECRET));
    res.send(jwtConstructor);
}

const validarToken = async (token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        );
    } catch (error) {
        return false;
    }
}

export {
    crearToken,
    validarToken
}