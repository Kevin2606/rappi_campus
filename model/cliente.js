import connect from "../db/connectDB.js";
import getNextSequenceValue from "../helper/counter.js";


const db = (await connect()).collection("clientes");
export default class ClienteModel{  
    
    static async getClient(id)
    {
        try {
            const getClient=await db.findOne({ id: id });
            if(!getClient)
            {   
                console.log("Usuario no encontrado")
                return {status:400, message: "Usuario no encontrado"}
            }
            return getClient
        } catch (error) {
            return Promise.reject(error);
        }
    }
    static async getAllClient()
    {
        try {
            const getClients=await db.find().toArray();
            return getClients
        } catch (error) {
            return Promise.reject(error);
        }
        
    }
    static async createClient(cliente)
    {
        try {
            cliente.id = await getNextSequenceValue("clientes");
            return await db.insertOne(cliente);
        } catch (error) {
            return Promise.reject(error);
        }
        
    }
    static async deleteClient(id)
    {   
        try {
            const removeClient= await db.deleteOne({id:id})
            if(removeClient.acknowledged && removeClient.deletedCount>0)
            {
                console.log("Cliente eliminado correctamente");
                return  {status:400, message: "Cliente eliminado Correctamente"} 
            }
            return getClient
        } 
        catch (error) {

            console.log(error.message);            
            return Promise.reject(error); 
            
        }       
        
    }
    static async updateClient(id,dataUpdateClient)
    {
        try {            
            const updateClient= await db.updateOne(
                {id:id},
                {$set:dataUpdateClient}
                );

            if(updateClient.acknowledged && updateClient.matchedCount>0)
            {
                console.log("Datos actualizados correctamente");
                return {status:400, message:"Datos actualizados correctamente" }
            }
            return updateClient
        } 
        catch (error) {
            
            return Promise.reject(error); 
            
        } 
        
    }


    
}