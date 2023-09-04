// Importa el cliente MongoDB y otros módulos necesarios
import connect from "../db/connectDB.js";

const conexion= await connect()

// Función para realizar una transacción de inserción
export default async function insertWithTransaction(data,collection) {
    try {

        const model={
            "clientes": "clientesID",
            "repartidores":"repartidoresID",
            "pedidos":"pedidosID",
            "restaurantes":"restaurantesID",
            "productos":"productosID"
        }
        const collectionID= model[collection]        
        const session = conexion.startSession();

        try {
            session.startTransaction();

            const counterCollection = conexion.db().collection('counters');
            const doc = await counterCollection.findOneAndUpdate(
                { _id: collectionID },
                { $inc: { sequence_value: 1 } },
                { session, returnOriginal: false }
            );

            data.id = doc.value.sequence_value;            
            const clientesCollection = conexion.db().collection(collection);
            await clientesCollection.insertOne(data,{ session });
            await session.commitTransaction();
            return{message:"Creación Exitosa"}
        }
        catch (error)
        {
            //console.log(err);
            return Promise.reject(error); 
        } 

        finally {
            session.endSession();
        }

    } 
    catch (error)
    {
        //console.log(err);
        return Promise.reject(error);  
    }    
    }


