import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'segredo_para_desenvolvimento';

class AuthController {
  // Login
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Busca usuário
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      // Verifica senha
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      // Gera token JWT
      const token = jwt.sign(
        { id: user.id, tipoUsuario: user.tipoUsuario },
        JWT_SECRET,
        { expiresIn: '1d' }
      );

      // Retorna usuário (sem senha) + token
      const { password: _, ...userWithoutPassword } = user;
      return res.json({ user: userWithoutPassword, token });

    } catch (error) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Resetar senha
  async resetPassword(req, res) {
    try {
      const { email, newPassword } = req.body;

      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await prisma.user.update({
        where: { email },
        data: { password: hashedPassword },
      });

      return res.json({ message: 'Senha atualizada com sucesso' });

    } catch (error) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}

export default new AuthController();
