import { Router } from "express";
import ProductoController from "../controller/producto.js";

const router= Router()

router.get("/getAllProduct", ProductoController.getAllProduct)
router.get("/getProductByRestaurant/:id", ProductoController.getProductByRestaurant)
router.get("/getProduct/:id", ProductoController.getProduct)
router.post("/create", ProductoController.createProduct)
router.delete("/delete/:id", ProductoController.deleteProduct)
router.delete("/deleteByRestaurant/:id", ProductoController.deleteAllProductByRestaurant)
router.put("/update/:id", ProductoController.updateProduct)

export default router;