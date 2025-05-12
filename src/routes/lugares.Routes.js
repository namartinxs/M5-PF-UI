import express from "express";
import  LugaresController  from '../controllers/lugares.Controller.js'

const router = express.Router();

router.get("/", LugaresController.getLocais() )
router.post("/", postLocal)
router.put("/:id", updateLocal)
router.delete("/:id", deleteLocal)

export default router;