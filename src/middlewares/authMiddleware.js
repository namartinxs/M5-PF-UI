import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'seuSegredoJWT';

/**
 * Middleware unificado de autenticação JWT:
 * 1. Valida o token no formato "Bearer <token>"
 * 2. Injeta userId e tipoUsuario na requisição
 * 3. Trata erros específicos (token expirado, inválido, etc.)
 */
export default function authMiddleware(req, res, next) {
  try {
    // 1. Extrai o token do header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'Token não fornecido. Use o formato "Bearer <token>".' });
    }

    // 2. Verifica o formato "Bearer <token>"
    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) {
      return res.status(401).json({ error: 'Formato de token inválido. Use "Bearer <token>".' });
    }

    // 3. Decodifica e valida o token
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // 4. Injeta dados na requisição
    req.userId = decoded.id;
    req.tipoUsuario = decoded.tipoUsuario;

    next();

  } catch (error) {
    // 5. Tratamento de erros específicos
    let errorMessage;
    switch (error.name) {
      case 'TokenExpiredError':
        errorMessage = 'Token expirado. Faça login novamente.';
        break;
      case 'JsonWebTokenError':
        errorMessage = 'Token inválido ou malformado.';
        break;
      default:
        errorMessage = 'Falha na autenticação.';
    }

    return res.status(401).json({ 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined // Opcional: mostra detalhes apenas em dev
    });
  }
}