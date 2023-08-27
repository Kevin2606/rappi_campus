import connect from "../db/connectDB.js";
import getNextSequenceValue from "../helper/counter.js";


const db = (await connect()).collection("clientes");
export default class ClienteModel{  
    
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
            const getClients=await db.find().toArray();
            return getClients
        } catch (error) {
            return { status: 400, message: error.message };
        }
        
    }
    static async createClient(cliente)
    {
        try {
            cliente.id_cliente = await getNextSequenceValue("clientes");
            return await db.insertOne(cliente);
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
    static async deleteClient(id)
    {   
        try {

            const removeClient= await db.deleteOne({id_cliente:id})
            console.log("Cliente eliminado correctamente");
            return removeClient   
        } 
        catch (error) {

            console.log(error.message);            
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


    
}