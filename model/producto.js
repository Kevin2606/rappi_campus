import connect from "../db/connectDB.js";
import insertWithTransaction from "../helper/transaction.js";

const collection= "productos"
const db = (await connect()).db().collection(collection);
export default class ProductoModel{  
    
    static async getProduct(id)
    {
        try {
            const getProduct=await db.findOne({ id_producto: id });
            if(!getProduct)
            {   
                console.log("Restaurante no encontrado")
                return {status:400, message: "Restaurante no encontrado"}
            }
            return getProduct
            
        } catch (error) {
            return { status: 400, message: "Producto no encontrado" };
        }
    }
    static async getAllProduct()
    {
        try {
            const getAllProduct=await db.find().toArray();
            return getAllProduct
        } catch (error) {
            return Promise.reject(error);
        }
        
    }
    static async getProductByRestaurant(id_rest){

        try{
            const products= await db.aggregate([
                {
                    $match:{
                        id_restaurante: id_rest
                    }
                }, 
                {
                    $addFields: {
                        precio: { $toString: "$valor_unitario" }
                    }
                },
                {
                    $unset:[
                        "valor_unitario",
                        "_id",            
                    ]        
                }    
                ]).toArray();
                if(!products)
                {   
                    console.log("Restaurante no encontrado")
                    return {status:400, message: "Restaurante no encontrado"}
                }
            return products 
        }
        catch(error)
        {
            return Promise.reject(error);
        }


    }
    static async createProduct(producto)
    {
        try {
            //producto.id_producto = await getNextSequenceValue("productos");
            return await db.insertOne(producto);
        } catch (error) {
            return Promise.reject(error);
        }
        
        
    }
    static async deleteProduct(id)
    {   
        try {

            const removeProduct= await db.deleteOne({id_producto:id})
            if(removeProduct.acknowledged && removeProduct.deletedCount>0)
            {
                console.log("Producto eliminado correctamente");
                return  {status:400, message: "Prodcuto eliminado Correctamente"} 
            }
            return removeProduct
        } 
        catch (error) {
            return Promise.reject(error);           
        }       
        
    }
    static async deleteAllProductByRestaurant(id_rest)
    {   
        try {

            const removeProduct= await db.remove({id_restaurante:id_rest})
            if(removeProduct.acknowledged && removeProduct.deletedCount>0)
            {
                console.log("Productos eliminados correctamente");
                return  {status:400, message: "Prodcutos eliminados Correctamente"} 
            }
            return removeProduct
        } 
        catch (error) {
            return Promise.reject(error);           
        }       
        
    }
    static async updateProduct(id,dataUpdateProduct)
    {
        try {            
            const updateProduct= await db.updateOne(
                {id_cliente:id},
                {$set:dataUpdateProduct}
                );
            console.log("Datos actualizados correctamente");
            return updateProduct   
        } 
        catch (error) {            
            return Promise.reject(error);           
        } 
        
    }


    
}