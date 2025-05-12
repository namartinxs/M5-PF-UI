import express from "express";
import cors from "cors";


import livrosRoutes from "./routes/livros.routes.js";
import lugaresRoutes from './routes/lugares.Routes.js';
import tipoProdutoRoutes from './routes/tipoProduto.Routes.js';
import animaisRoutes from "./routes/animais.routes.js";
// import usersRoutes from "./routes/users.routes.js"; // Importando a rota de usuários
import routerRoupas from "./routes/roupas.routes.js"; // Importando a rota de roupas
import routerEletronicos from "./routes/eletronicos.routes.js"; // Importando a rota de eletrônicos




const app = express();
// const prisma = new  PrismaClient()

app.use(cors());
app.use(express.json());



app.use("/livros", livrosRoutes);
app.use("/locais", lugaresRoutes);
app.use("/produtos", tipoProdutoRoutes);
app.use("/animais", animaisRoutes);
app.use("/users", usersRoutes); // Registrando a rota de usuários
app.use("/roupas", routerRoupas); // Registrando a rota de roupas
app.use("/eletronicos", routerEletronicos); // Registrando a rota de eletrônicos

app.listen(8800, () => {
  console.log("Servidor rodando na porta 8800");
});
export default app;
