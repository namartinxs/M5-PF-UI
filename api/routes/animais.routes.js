import express from "express";
import {
  getAnimais,
  deleteAnimal,
  atualizarAnimal,
  cadastrarAnimal
} 
from "../controllers/Animais.controller.js";

const router = express.Router(); 

router.get("/", getAnimais);
router.post("/", cadastrarAnimal);
router.put("/:id", atualizarAnimal);
router.delete("/:id", deleteAnimal);

export default router;

