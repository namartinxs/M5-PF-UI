const express = require("express");
const { getProduto, postProduto, updateProduto, deleteProduto } = require("../controllers/tipoProdutoController");

const router = express.Router();

router.get("/produtos", getProduto)
router.post("/produtos", postProduto)
router.put("/produtos/:id", updateProduto)
router.delete("/produtos/:id", deleteProduto)

export default router;
