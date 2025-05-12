import express from "express";
import { getLocais, postLocal, updateLocal, deleteLocal } 
from "../controllers/lugares.Controller.js";

const router = express.Router();

router.get("/", getLocais)
router.post("/cadastro", postLocal)
router.put("/update/:id", updateLocal)
router.delete("/delete/:id", deleteLocal)

export default router;