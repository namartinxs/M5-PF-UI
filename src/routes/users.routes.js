import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import authController from '../controllers/auth.controller.js';
import userController from '../controllers/user.controller.js';

const routerUser = express.Router();

// ======================================
// Rotas Públicas (não requerem autenticação)
// ======================================

// Registro de usuário
routerUser.post('/users/', userController.createUser);

// Login (gera token JWT)
routerUser.post('/login', authController.login);

// Reset de senha
routerUser.post('/reset-password', authController.resetPassword);

// ======================================
// Rotas Protegidas (requerem autenticação com token válido)
// ======================================

// Obter informações do usuário logado
routerUser.get('/me', authMiddleware, userController.getLoggedUser);

// Listar todos os usuários (restrito a ADMIN no futuro)
routerUser.get('/users', authMiddleware, userController.getUsers);

// Editar informações de um usuário específico
routerUser.put('/users/:id', authMiddleware, userController.editUser);

// Deletar um usuário específico
routerUser.delete('/users/:id', authMiddleware, userController.deleteUser);

export default routerUser;
