// src/swagger.js
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API Solidária de Doações',
    },
    servers: [
      {
        url: 'https://m4-projeto-final-qvw6.onrender.com',
        description: 'Servidor Local',
      },
    ],
  },
  apis: ['./src/swagger.js'], // Caminho para os arquivos da doc swagger

};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };

/**
 * @swagger
 * /campanha:
 *   get:
 *     summary: Lista todas as campanhas
 *     responses:
 *       200:
 *         description: Lista de campanhas
 *   post:
 *     summary: Cria uma nova campanha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 * 
 *     responses:
 *       201:
 *         description: Campanha criada
 *   put:
 *     summary: Atualiza uma campanha pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da campanha
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Campanha atualizada
 *   delete:
 *     summary: Deleta uma campanha pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da campanha
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Campanha deletada
 */


/**
 * @swagger
 * /doacoes:
 *   get:
 *     summary: Lista todas as doações
 *     responses:
 *       200:
 *         description: Lista de doações
 *   post:
 *     summary: Cadastra uma nova doação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               doador:
 *                 type: string
 *               valor:
 *                 type: number
 *     responses:
 *       201:
 *         description: Doação cadastrada
 *   put:
 *     summary: Atualiza uma doação pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da doação
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Doação atualizada
 *   delete:
 *     summary: Deleta uma doação pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da doação
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Doação deletada
 */


/**
 * @swagger
 * /feedback:
 *   get:
 *     summary: Lista todos os feedbacks
 *     responses:
 *       200:
 *         description: Lista de feedbacks
 *   post:
 *     summary: Cria um novo feedback
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comentario:
 *                 type: string
 *     responses:
 *       201:
 *         description: Feedback criado
 *   put:
 *     summary: Atualiza um feedback pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do feedback
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Feedback atualizado
 *   delete:
 *     summary: Deleta um feedback pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do feedback
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Feedback deletado
 */


/**
 * @swagger
 * /locais:
 *   get:
 *     summary: Lista todos os locais
 *     responses:
 *       200:
 *         description: Lista de locais
 *   post:
 *     summary: Cadastra um novo local
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               endereco:
 *                 type: string
 *     responses:
 *       201:
 *         description: Local cadastrado
 *   put:
 *     summary: Atualiza um local pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do local
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Local atualizado
 *   delete:
 *     summary: Deleta um local pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do local
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Local deletado
 */

/**
 * @swagger
 * /categoria:
 *   get:
 *     summary: Lista todas as categorias
 *     responses:
 *       200:
 *         description: Lista de categorias

 *   post:
 *     summary: Cria uma nova categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso

 *   put:
 *     summary: Atualiza uma categoria pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da categoria a ser atualizada
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso

 *   delete:
 *     summary: Remove uma categoria pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da categoria a ser removida
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Categoria removida com sucesso
 */

/**
 * @swagger
 * /log-alteracoes:
 *   get:
 *     summary: Lista todos os registros de alterações
 *     responses:
 *       200:
 *         description: Lista de alterações realizadas no sistema
 *
 *   post:
 *     summary: Registra uma nova alteração no sistema
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *               acao:
 *                 type: string
 *               data:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Alteração registrada com sucesso
 *
 *   delete:
 *     summary: Remove um registro de alteração
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do log a ser removido
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro removido
 */

/**
 * @swagger
 * /login:
 *   post:
 *     tags: [Autenticação]
 *     summary: Realiza login e retorna um token JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: exemplo@email.com
 *               senha:
 *                 type: string
 *                 example: senha123
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       401:
 *         description: Credenciais inválidas
 */

/**
 * @swagger
 * /reset-password:
 *   post:
 *     tags: [Autenticação]
 *     summary: Solicita redefinição de senha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: exemplo@email.com
 *     responses:
 *       200:
 *         description: E-mail de redefinição enviado
 *       404:
 *         description: Usuário não encontrado
 */

/**
 * @swagger
 * /me:
 *   get:
 *     tags: [Usuários]
 *     summary: Retorna os dados do usuário logado
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dados do usuário
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags: [Usuários]
 *     summary: Lista todos os usuários
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 *   post:
 *     tags: [Usuários]
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     tags: [Usuários]
 *     summary: Atualiza os dados de um usuário
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *
 *   delete:
 *     tags: [Usuários]
 *     summary: Remove um usuário
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário a ser deletado
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */