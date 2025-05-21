import express from "express";
import cors from "cors";
import { swaggerUi, swaggerDocs } from './swagger.js';
import path from 'path';
import { fileURLToPath } from 'url';
import logDoacaoRoutes from "./routes/logDoacao.routes.js"
import feedbackRoutes from "./routes/feedbacks.routes.js";
import doacoesRouters from "./routes/doacoes.routes.js";
import locaisRouters from "./routes/locais.routes.js";
import campanhasRouters from "./routes/campanhas.routes.js";
import routerCategoria from "./routes/categoria.routes.js";
import routerUser from "./routes/users.routes.js";
import authRoutes from './routes/auth.routes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Para resolver __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir a documentação MkDocs na rota /docs
app.use('/docs', express.static(path.join(__dirname, '../site')));
app.get("/", (req, res) => {
  res.status(200).json({ message: "API funcionando corretamente!" });
});

// Rotas
app.use("/logs-alteracao",logDoacaoRoutes );
app.use("/feedbacks", feedbackRoutes);
app.use("/doacoes", doacoesRouters);
app.use("/locais", locaisRouters);
app.use("/campanhas", campanhasRouters);
app.use("/categorias", routerCategoria);
app.use("/users", routerUser);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/auth', authRoutes);
app.put('/test-put/:id', (req, res) => {
  res.json({ message: `Rota PUT de teste acessada com ID: ${req.params.id}`, body: req.body });
});

// Inicialização do servidor
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Documentação disponível em http://localhost:8800/api-docs`);

});

export default app;
