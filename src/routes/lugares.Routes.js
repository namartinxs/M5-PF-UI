import express from "express";
import { getLocais, postLocal, updateLocal, deleteLocal } 
from "../controllers/lugares.Controller.js";

const router = express.Router();

router.get("/", getLocais)
router.post("/", postLocal)
router.put("/:id", updateLocal)
router.delete("/:id", deleteLocal)

export default router;