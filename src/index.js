import express from "express";
import cors from "cors";
// import router from "../src/routes/users.routes.js"
import feedbackRoutes from "./routes/feedbacks.routes.js";
import doacoesRoutes from "./routes/doacoes.Routes.js"; 
 import campanhaRoutes from "./routes/campanhas.router.js"; // Importando as rotas de campanha
 import locaisroutes from "./routes/locais.Routes.js"; // Importando as rotas de locais

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
// app.use("/user",routerUser)
app.use("/feedbacks", feedbackRoutes);
app.use("/doacoes", doacoesRoutes); 
app.use("/campanha", campanhaRoutes); // Rota para campanha de ajuda/campanhas
app.use("/locais", locaisroutes); // Rota para locais
// Inicialização do servidor
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
