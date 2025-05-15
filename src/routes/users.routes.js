import express from 'express';
import authMiddleware from './middlewares/authMiddleware';
import userController from '../controllers/user.Controller';
import authController from '../controllers/auth.Controller';

const router = express.Router();

// ======================================
// Rotas Públicas (não requerem autenticação)
// ======================================
router.post('/users', userController.createUser); // Registro de usuário
router.post('/login', authController.login); // Login (gera token JWT)
router.post('/reset-password', authController.resetPassword); // Reset de senha

// ======================================
// Rotas Protegidas (requerem token válido)
// ======================================
router.get('/me', authMiddleware, userController.getLoggedUser); // Pega usuário logado
router.get('/users', authMiddleware, userController.getUsers); // Lista usuários (restringir para ADMIN depois)
router.put('/users/:id', authMiddleware, userController.editUser); // Edita usuário
router.delete('/users/:id', authMiddleware, userController.deleteUser); // Deleta usuário

export default router;