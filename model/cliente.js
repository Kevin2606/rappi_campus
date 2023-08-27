import connect from "../db/connectDB.js";

const db = await connect().collection("clientes");
export default class ClienteModel{  

    static async createClient(cliente)
    {
        try {            
            const newClient= await db.insertOne(cliente)
            return newClient
            //return console.log("Cliente Creado");
        } 
        catch (error) {
            if (error.code === 11000)
            return {
                status: 400,
                message: `${Object.keys(error.keyValue)[0]}: Ya está en uso`,
            };
        return { status: 400, message: "Error en la creación de usuario" };            
        }
        
        
    }
    static async deleteClient(id_cliente)
    {   
        try {

            const removeClient= await db.deleteOne(id_cliente)
            console.log("Cliente eliminado correctamente");
            return removeClient   
        } 
        catch (error) {
            
            return { status: 400, message: "Error al eliminar el usuario" };  
            
        }       
        
    }
    static async updateClient(id,dataUpdateClient)
    {
        try {
            const query={}
            const updateClient= await db.updateOne(
                {id_cliente:id},
                {$set:dataUpdateClient}
                );
            console.log("Datos actualizados correctamente");
            return updateClient   
        } 
        catch (error) {
            
            return { status: 400, message: "Error al actualizar el usuario" };  
            
        } 
        
    }
    static async getClient(id)
    {
        try {
            const getClient=await db.findOne({ id_cliente: id });
            return getClient
        } catch (error) {
            return { status: 400, message: "Usuario no encontrado" };
        }
    }

    static async getAllClient()
    {
        try {
            const getClients=await db.find();
            return getClients
        } catch (error) {
            return { status: 400, message: error.message };
        }
        
    }

    
}