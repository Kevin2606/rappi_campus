import { Router } from "express";
import ClienteController from "../controller/cliente.js";

const router= Router()

router.get("/getClient/:id", ClienteController.getClient)
router.get("/getAllClient", ClienteController.getAllClient)
router.post("/createClient", ClienteController.createClient)
router.delete("/deleteClient/:id", ClienteController.deleteClient)
router.put("/updateClient/:id", ClienteController.updateClient)