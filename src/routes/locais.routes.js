import express from "express";
import  locaisController from "../controllers/locais.controller.js";


const router = express.Router();

router.get("/", locaisController.getLocais)
router.post("/cadastro", locaisController.cadastraLocal)
router.put("/update/:id", locaisController.atualizaLocal)
router.delete("/delete/:id", locaisController.deleteLocais)

export default router;
