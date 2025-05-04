import express from "express";
import livrosRoutes from "./livros.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/livros', livrosRoutes);

app.listen(8800, () => {
  console.log("Servidor rodando na porta 8800");
});
