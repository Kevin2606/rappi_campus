import ProductoModel from "../model/producto.js"

export default class ProductoController {
    static async getProduct(req,res){

        try {
            const producto = await ProductoModel.getProduct(parseInt(req.params.id))
            console.log(producto)
            res.status(200).json(producto);
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }
    }
    static async getAllProduct(req,res){

        try {
            const producto = await ProductoModel.getAllProduct()
            console.log(producto)
            res.status(200).json(producto);
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }
    }
    static async getProductByRestaurant(req,res){
        try {
            const producto = await ProductoModel.getProductByRestaurant(parseInt(req.params.id))
            console.log(producto)
            res.status(200).json(producto);
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }

    }
    static async createProduct(req,res){

        try {
            const producto = await ProductoModel.createProduct(req.body)
            console.log(producto)
            res.status(200).json(producto);
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }
    }
    static async deleteProduct(req,res){

        try {
            const producto = await ProductoModel.deleteClient(parseInt(req.params.id))
            console.log(producto)            
            res.status(200).json(producto);
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }
    }
    static async deleteAllProductByRestaurant(req,res){
        try {
            const producto = await ProductoModel.deleteAllProductByRestaurant(parseInt(req.params.id))
            console.log(producto)
            res.status(200).json(producto);
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }

    }
    static async updateProduct(req,res){

        try {
            const producto = await ProductoModel.updateProduct(parseInt(req.params.id),req.body)
            console.log(producto)
            res.status(200).json(producto);
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }
    }
}