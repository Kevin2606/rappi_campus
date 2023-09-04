import { Router } from "express";
import ClienteController from "../../controller/v1/cliente.js";

const router= Router()

router.get("/getClient/:id", ClienteController.getClient)
router.get("/getAllClient", ClienteController.getAllClient)
router.post("/create", ClienteController.createClient)
router.delete("/delete/:id", ClienteController.deleteClient)
router.put("/update/:id", ClienteController.updateClient)

export default router;