const express = require("express");
const { getLocais, postLocal, updateLocal, deleteLocal } = require("../controllers/lugaresController");

const router = express.Router();

router.get("/locais", getLocais)
router.post("/locais", postLocal)
router.put("/locais/:id", updateLocal)
router.delete("/locais/:id", deleteLocal)

export default router;