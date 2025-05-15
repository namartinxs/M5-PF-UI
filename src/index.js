import express from "express";
import cors from "cors";

import feedbackRoutes from "../src/routes/feedbacks.routes.js";
import doacoesRoutes from "../src/routes/doacoes.Routes.js"; 

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/feedbacks", feedbackRoutes);
app.use("/doacoes", doacoesRoutes); 
// Inicialização do servidor
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
