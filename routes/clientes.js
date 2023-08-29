import { Router } from "express";
import ClienteController from "../controller/cliente.js";

const router= Router()

router.get("/getClient/:id", ClienteController.getClient)
router.get("/getAllClient", ClienteController.getAllClient)
router.post("/create", ClienteController.createClient)
router.delete("/delete/:id", ClienteController.deleteClient)
router.put("/update/:id", ClienteController.updateClient)
router.post("/login", ClienteController.loginClient)

export default router;