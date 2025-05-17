import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

class UserController {
  // Criar usuário
  async createUser(req, res) {
    try {
      const { name, email, password, tipoUsuario } = req.body;

      if (!['ADMIN', 'DOADOR', 'DONATARIO'].includes(tipoUsuario)) {
        return res.status(400).json({ error: 'Tipo de usuário inválido.' });
      }

      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'Email já cadastrado' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: { name, email, password: hashedPassword, tipoUsuario },
        select: { id: true, name: true, email: true, tipoUsuario: true }
      });

      return res.status(201).json(user);

    } catch (error) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Obter usuário logado
  async getLoggedUser(req, res) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.userId },
        select: { id: true, name: true, email: true, tipoUsuario: true }
      });

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      return res.json(user);

    } catch (error) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Listar usuários (apenas ADMIN)
  async getUsers(req, res) {
    try {
      if (req.tipoUsuario !== 'ADMIN') {
        return res.status(403).json({ error: 'Acesso negado' });
      }

      const users = await prisma.user.findMany({
        select: { id: true, name: true, email: true, tipoUsuario: true }
      });

      return res.json(users);

    } catch (error) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Editar usuário
  async editUser(req, res) {
    try {
      const updatedUser = await prisma.user.update({
        where: { id: req.params.id },
        data: req.body,
        select: { id: true, name: true, email: true, tipoUsuario: true }
      });

      return res.json(updatedUser);

    } catch (error) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Deletar usuário
  async deleteUser(req, res) {
    try {
      await prisma.user.delete({ where: { id: req.params.id } });
      return res.json({ message: 'Usuário deletado com sucesso' });

    } catch (error) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}

export default new UserController();
