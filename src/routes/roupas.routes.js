import express from "express";
import { getByRoupas, postByRoupas, updateByRoupas, deleteByRoupas } from "../controllers/roupas.controller.js";

const routerRoupas = express.Router();

routerRoupas.get("/", getByRoupas);
routerRoupas.post("/", postByRoupas);
routerRoupas.put("/:id", updateByRoupas); // Rota para atualizar
routerRoupas.delete("/:id", deleteByRoupas); // Rota para deletar

export default routerRoupas;