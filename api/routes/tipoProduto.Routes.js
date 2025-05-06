import express from "express";
import { getProduto, postProduto, updateProduto, deleteProduto }
from "../controllers/tipoProduto.Controller.js";

const router = express.Router();

router.get("/", getProduto)
router.post("/", postProduto)
router.put("/:id", updateProduto)
router.delete("/:id", deleteProduto)

export default router;