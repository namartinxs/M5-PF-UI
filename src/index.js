import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { swaggerUi, swaggerDocs } from './swagger.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Rotas
import logDoacaoRoutes from "./routes/logDoacao.routes.js";
import feedbackRoutes from "./routes/feedbacks.routes.js";
import doacoesRouters from "./routes/doacoes.routes.js";
import locaisRouters from "./routes/locais.routes.js";
import campanhasRouters from "./routes/campanhas.routes.js";
import routerCategoria from "./routes/categoria.routes.js";
import routerUser from "./routes/users.routes.js";
import authRoutes from './routes/auth.routes.js';

// Middlewares de autenticação
import authMiddleware from './middlewares/authMiddleware.js';
import UserController from './controllers/user.controller.js';

const app = express();

// Middlewares globais
app.use(cors({
  origin: 'http://localhost:8800', // ou sua URL do front
  credentials: true // habilita o envio de cookies
}));
app.use(express.json());
app.use(cookieParser()); // 🔐 necessário para ler cookies

// Resolver __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Documentação MkDocs
app.use('/docs', express.static(path.join(__dirname, '../site')));

// Rota raiz
app.get("/", (req, res) => {
  res.status(200).json({ message: "API funcionando corretamente!" });
});

// Rotas principais
app.use("/logs-alteracao", logDoacaoRoutes);
app.use("/feedbacks", feedbackRoutes);
app.use("/doacoes", doacoesRouters);
app.use("/locais", locaisRouters);
app.use("/campanhas", campanhasRouters);
app.use("/categorias", routerCategoria);
app.use("/users", routerUser);
app.use('/auth', authRoutes);

// Rota protegida para obter dados do usuário logado
app.get('/me', authMiddleware, UserController.getLoggedUser);

// Teste de PUT
app.put('/test-put/:id', (req, res) => {
  res.json({ message: `Rota PUT de teste acessada com ID: ${req.params.id}`, body: req.body });
});

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Inicialização
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Documentação disponível em http://localhost:8800/api-docs`);
});

export default app;
