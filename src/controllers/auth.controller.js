import jwt from 'jsonwebtoken';
import { getUserByEmailService } from '../service/user.service.js';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'seuSegredoJWT';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

class AuthController {
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
      }

      const user = await getUserByEmailService(email);
      if (!user) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      const passwordMatch = await bcrypt.compare(senha, user.senha);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      const token = jwt.sign(
        { id: user.id, tipoUsuario: user.tipo },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
      );

      // Envia cookie seguro
        res.cookie('token', token, {
          httpOnly: true,
          secure: false,         // ⚠️ Apenas para localhost (sem HTTPS)
          sameSite: 'lax',       // ou 'none' se usar HTTPS em ambos
          maxAge: 24 * 60 * 60 * 1000
        });


      return res.status(200).json({
        user: {
          id: user.id,
          nome: user.nome,
          email: user.email,
          tipo: user.tipo
        }
      });

    } catch (error) {
      console.error('Erro no login:', error);
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  async logout(req, res) {
    try {
      res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      });

      return res.json({ message: 'Logout realizado com sucesso' });
    } catch (error) {
      console.error('Erro no logout:', error);
      return res.status(500).json({ error: 'Erro ao fazer logout' });
    }
  }

  async resetPassword(req, res) {
    try {
      const { email } = req.body;
      console.log(`Solicitação de reset de senha para o email: ${email}`);
      return res.json({ message: 'Solicitação de reset de senha recebida' });
    } catch (error) {
      console.error('Erro ao solicitar reset de senha:', error);
      return res.status(500).json({ error: 'Erro ao processar a solicitação de reset de senha' });
    }
  }
}

export default new AuthController();
