import connect from "../db/connectDB.js";
import getNextSequenceValue from "../helper/counter.js";


const db = (await connect()).collection("productos");
export default class ProductoModel{  
    
    static async getProduct(id)
    {
        try {
            const getProduct=await db.findOne({ id_producto: id });
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
            return { status: 400, message: error.message };
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
            return products    
        }
        catch(error)
        {
            return { status: 400, message: error.message };
        }


    }
    static async createProduct(producto)
    {
        try {
            producto.id_producto = await getNextSequenceValue("productos");
            return await db.insertOne(producto);
        } catch (error) {
            console.log(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0]);
            if (error.code === 11000)
                return {
                    status: 400,
                    message: `${Object.keys(error.keyValue)[0]}: Ya registrado en el sistema`,
                };
            return { status: 400, message: "Error validacion fallida" };
        }
        
        
    }
    static async deleteProduct(id)
    {   
        try {

            const removeProduct= await db.deleteOne({id_producto:id})
            console.log("Producto eliminado correctamente");
            return removeProduct   
        } 
        catch (error) {

            console.log(error.message);            
            return { status: 400, message: "Error al eliminar el producto" };  
            
        }       
        
    }
    static async deleteAllProductByRestaurant(id_rest)
    {   
        try {

            const removeProduct= await db.remove({id_restaurante:id_rest})
            console.log("Productos eliminados correctamente");
            return removeProduct   
        } 
        catch (error) {

            console.log(error.message);            
            return { status: 400, message: "Error al eliminar los productos." };  
            
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
            
            return { status: 400, message: "Error al actualizar el producto." };  
            
        } 
        
    }


    
}