import connect from "../db/connectDB.js";
import insertWithTransaction from "../helper/transaction.js";

const conexion = (await connect())


export default class AuthModel {
    static async register(user, collection) {
        try {            
            await insertWithTransaction(user,collection)
            return user
        } catch (error) {
            return Promise.reject(error); 
        }
    }

    static async login(email, collection) {
        try {
            const con = conexion.db().collection(collection);
            const getUser = await con.findOne({ correo: email });
            return getUser;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}