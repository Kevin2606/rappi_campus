import ProductoModel from "../model/producto.js"

export default class ProductoController {
    static async getProduct(req,res,next){

        try {
            const producto = await ProductoModel.getProduct(parseInt(req.params.id))
            console.log(producto)
            res.status(200).json(producto);
        } catch (error) {
            next(error);
        }
    }
    static async getAllProduct(req,res,next){

        try {
            const producto = await ProductoModel.getAllProduct()
            console.log(producto)
            res.status(200).json(producto);
        } catch (error) {
            next(error);
        }
    }
    static async getProductByRestaurant(req,res,next){
        try {
            const producto = await ProductoModel.getProductByRestaurant(parseInt(req.params.id))
            console.log(producto)
            res.status(200).json(producto);
        } catch (error) {
            next(error);
        }

    }
    static async createProduct(req,res,next){

        try {
            const producto = await ProductoModel.createProduct(req.body)
            console.log(producto)
            res.status(200).json(producto);
        } catch (error) {
            next(error);
        }
    }
    static async deleteProduct(req,res,next){

        try {
            const producto = await ProductoModel.deleteClient(parseInt(req.params.id))
            console.log(producto)            
            res.status(200).json(producto);
        } catch (error) {
            next(error);
        }
    }
    static async deleteAllProductByRestaurant(req,res,next){
        try {
            const producto = await ProductoModel.deleteAllProductByRestaurant(parseInt(req.params.id))
            console.log(producto)
            res.status(200).json(producto);
        } catch (error) {
            next(error);
        }

    }
    static async updateProduct(req,res,next){

        try {
            const producto = await ProductoModel.updateProduct(parseInt(req.params.id),req.body)
            console.log(producto)
            res.status(200).json(producto);
        } catch (error) {
            next(error);
        }
    }
}