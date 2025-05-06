import express from "express";
<<<<<<< HEAD
=======
import livrosRoutes from './routes/livros.routes.js';
>>>>>>> origin/main
import cors from "cors";
import livrosRoutes from "./routes/livros.routes.js";
import lugaresRoutes from './routes/lugares.Routes.js';
import tipoProdutoRoutes from './routes/tipoProduto.Routes.js';
import animaisRoutes from "./routes/animais.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/livros", livrosRoutes);
app.use("/locais", lugaresRoutes);
app.use("/produtos", tipoProdutoRoutes);
app.use("/animais", animaisRoutes);

app.listen(8800, () => {
  console.log("Servidor rodando na porta 8800");
});
export default app;
