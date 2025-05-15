import express from "express";
import DoacoesController from "../controllers/doacoes.Controller.js";

const router = express.Router();

router.get("/", DoacoesController.getDoacoes);
router.post("/cadastro", DoacoesController.cadastraDoacao);
router.put("/update/:id", DoacoesController.atualizaDoacao);
router.delete("/delete/:id", DoacoesController.deleteDoacao);

export default router;
