// src/swagger.js
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Solidária de Doações',
      version: '1.0.0',
      description: 'Documentação completa da API para sistema de doações solidárias',
    },
    servers: [
      {
        url: 'https://m4-projeto-final-qvw6.onrender.com',
        description: 'Servidor de Produção',
      },
      {
        url: 'http://localhost:8800',
        description: 'Servidor Local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Local: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
            nome: { type: 'string', example: 'Local de Doação' },
            endereco: { type: 'string', example: 'Rua Exemplo, 123' },
            cidade: { type: 'string', example: 'São Paulo' },
            estado: { type: 'string', example: 'SP' },
            pais: { type: 'string', example: 'Brasil' },
          },
          required: ['id', 'cidade', 'estado', 'pais'],
        },
        LogAlteracaoDoacao: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
            usuario: { type: 'string', example: 'João Silva' },
            acao: { type: 'string', example: 'Atualização de doação' },
            data: { type: 'string', format: 'date-time', example: '2023-01-01T12:00:00Z' },
            doacaoId: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
            alteradoPor: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
            campo: { type: 'string', example: 'status' },
            valorAntigo: { type: 'string', example: 'PENDENTE' },
            valorNovo: { type: 'string', example: 'FEITA' },
          },
          required: ['id', 'doacaoId', 'alteradoPor', 'campo', 'valorAntigo', 'valorNovo', 'data'],
        },
        Doacao: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
            item: { type: 'string', example: 'Cesta Básica' },
            quantidade: { type: 'integer', example: 10 },
            data: { type: 'string', format: 'date-time', example: '2023-01-01T12:00:00Z' },
            valor: { type: 'number', format: 'float', example: 100.50 },
            tipoProduto: { type: 'string', enum: ['ANIMAL', 'LIVRO', 'ROUPA', 'ELETRONICO'], example: 'LIVRO' },
            produto: { type: 'string', example: 'Livro de Matemática' },
            status: { type: 'string', enum: ['PENDENTE', 'EXCLUIDO', 'FEITA'], example: 'PENDENTE' },
            usuarioId: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
            campanhaId: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
            categoriaId: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
            localId: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
          },
          required: ['id', 'valor', 'data', 'tipoProduto', 'produto', 'status', 'usuarioId', 'campanhaId', 'categoriaId', 'localId'],
        },
        Categoria: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
            nome: { type: 'string', example: 'Educação' },
            descricao: { type: 'string', example: 'Materiais educacionais' },
            iconeUrl: { type: 'string', example: 'https://example.com/icon.png' },
            ativo: { type: 'boolean', example: true },
            criadaEm: { type: 'string', format: 'date-time', example: '2023-01-01T12:00:00Z' },
            atualizadaEm: { type: 'string', format: 'date-time', example: '2023-01-02T12:00:00Z' },
          },
          required: ['id', 'nome', 'ativo', 'criadaEm'],
        },
        Feedback: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
            mensagem: { type: 'string', example: 'Ótima iniciativa!' },
            nota: { type: 'integer', example: 5 },
            criadoEm: { type: 'string', format: 'date-time', example: '2023-01-01T12:00:00Z' },
            usuarioId: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
            doacaoId: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
            campanhaId: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
          },
          required: ['id', 'mensagem', 'nota', 'criadoEm', 'usuarioId'],
        },
        Campanha: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
            titulo: { type: 'string', example: 'Campanha de Inverno' },
            descricao: { type: 'string', example: 'Arrecadação de agasalhos' },
            meta: { type: 'number', format: 'float', example: 10000.00 },
            criadaEm: { type: 'string', format: 'date-time', example: '2023-01-01T12:00:00Z' },
            criadorId: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
          },
          required: ['id', 'titulo', 'descricao', 'meta', 'criadaEm', 'criadorId'],
        },
        Usuario: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' },
            nome: { type: 'string', example: 'João Silva' },
            email: { type: 'string', format: 'email', example: 'joao@example.com' },
            senha: { type: 'string', example: 'senha123' },
            tipo: { type: 'string', enum: ['ADMIN', 'DOADOR', 'DONATARIO'], example: 'DONATARIO' },
            criadoEm: { type: 'string', format: 'date-time', example: '2023-01-01T12:00:00Z' },
            telefone: { type: 'string', example: '(11) 99999-9999' },
            ativo: { type: 'boolean', example: true },
            fotoUrl: { type: 'string', example: 'https://example.com/foto.jpg' },
          },
          required: ['id', 'nome', 'email', 'senha', 'tipo', 'criadoEm', 'ativo'],
        },
      },
    },
  },
  apis: ['./src/swagger.js'],
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };

/**
 * @swagger
 * /logs-alteracao:
 *   get:
 *     tags: [Logs]
 *     summary: Lista todos os logs de alteração
 *     responses:
 *       200:
 *         description: Lista de logs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LogAlteracaoDoacao'
 * 
 *   post:
 *     tags: [Logs]
 *     summary: Cria um novo log
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LogAlteracaoDoacao'
 *     responses:
 *       201:
 *         description: Log criado com sucesso
 */

/**
 * @swagger
 * /logs-alteracao/{id}:
 *   get:
 *     tags: [Logs]
 *     summary: Obtém um log pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do log
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LogAlteracaoDoacao'
 * 
 *   put:
 *     tags: [Logs]
 *     summary: Atualiza um log
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LogAlteracaoDoacao'
 *     responses:
 *       200:
 *         description: Log atualizado
 * 
 *   delete:
 *     tags: [Logs]
 *     summary: Remove um log
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Log removido
 */

/**
 * @swagger
 * /locais:
 *   get:
 *     tags: [Locais]
 *     summary: Lista todos os locais
 *     responses:
 *       200:
 *         description: Lista de locais
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Local'
 */

/**
 * @swagger
 * /locais/cadastro:
 *   post:
 *     tags: [Locais]
 *     summary: Cadastra um novo local
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Local'
 *     responses:
 *       201:
 *         description: Local cadastrado
 */

/**
 * @swagger
 * /locais/update/{id}:
 *   put:
 *     tags: [Locais]
 *     summary: Atualiza um local
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Local'
 *     responses:
 *       200:
 *         description: Local atualizado
 */

/**
 * @swagger
 * /locais/delete/{id}:
 *   delete:
 *     tags: [Locais]
 *     summary: Remove um local
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Local removido
 */

/**
 * @swagger
 * /feedbacks:
 *   get:
 *     tags: [Feedbacks]
 *     summary: Lista todos os feedbacks
 *     responses:
 *       200:
 *         description: Lista de feedbacks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Feedback'
 * 
 *   post:
 *     tags: [Feedbacks]
 *     summary: Cria um novo feedback
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Feedback'
 *     responses:
 *       201:
 *         description: Feedback criado
 */

/**
 * @swagger
 * /feedbacks/{id}:
 *   put:
 *     tags: [Feedbacks]
 *     summary: Atualiza um feedback
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Feedback'
 *     responses:
 *       200:
 *         description: Feedback atualizado
 * 
 *   delete:
 *     tags: [Feedbacks]
 *     summary: Remove um feedback
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Feedback removido
 */

/**
 * @swagger
 * /doacoes:
 *   get:
 *     tags: [Doações]
 *     summary: Lista todas as doações
 *     responses:
 *       200:
 *         description: Lista de doações
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Doacao'
 */

/**
 * @swagger
 * /doacoes/cadastro:
 *   post:
 *     tags: [Doações]
 *     summary: Cadastra uma nova doação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Doacao'
 *     responses:
 *       201:
 *         description: Doação cadastrada
 */

/**
 * @swagger
 * /doacoes/update/{id}:
 *   put:
 *     tags: [Doações]
 *     summary: Atualiza uma doação
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Doacao'
 *     responses:
 *       200:
 *         description: Doação atualizada
 */

/**
 * @swagger
 * /doacoes/delete/{id}:
 *   delete:
 *     tags: [Doações]
 *     summary: Remove uma doação
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Doação removida
 */

/**
 * @swagger
 * /categorias:
 *   get:
 *     tags: [Categorias]
 *     summary: Lista todas as categorias
 *     responses:
 *       200:
 *         description: Lista de categorias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categoria'
 * 
 *   post:
 *     tags: [Categorias]
 *     summary: Cria uma nova categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       201:
 *         description: Categoria criada
 */

/**
 * @swagger
 * /categorias/id/{id}:
 *   get:
 *     tags: [Categorias]
 *     summary: Busca uma categoria por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados da categoria
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 */

/**
 * @swagger
 * /categorias/{id}:
 *   put:
 *     tags: [Categorias]
 *     summary: Atualiza uma categoria
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       200:
 *         description: Categoria atualizada
 * 
 *   delete:
 *     tags: [Categorias]
 *     summary: Remove uma categoria
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Categoria removida
 */

/**
 * @swagger
 * /campanhas:
 *   get:
 *     tags: [Campanhas]
 *     summary: Lista todas as campanhas
 *     responses:
 *       200:
 *         description: Lista de campanhas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Campanha'
 * 
 *   post:
 *     tags: [Campanhas]
 *     summary: Cria uma nova campanha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Campanha'
 *     responses:
 *       201:
 *         description: Campanha criada
 */

/**
 * @swagger
 * /campanhas/{id}:
 *   put:
 *     tags: [Campanhas]
 *     summary: Atualiza uma campanha
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Campanha'
 *     responses:
 *       200:
 *         description: Campanha atualizada
 * 
 *   delete:
 *     tags: [Campanhas]
 *     summary: Remove uma campanha
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Campanha removida
 */
/**
 * @swagger
 * /users:
 *   post:
 *     tags: [Usuários]
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usuário criado
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     tags: [Autenticação]
 *     summary: Autentica um usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       401:
 *         description: Credenciais inválidas
 */

/**
 * @swagger
 * /users/reset-password:
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
 *     responses:
 *       200:
 *         description: E-mail de redefinição enviado
 *       404:
 *         description: Usuário não encontrado
 */

/**
 * @swagger
 * /users/me:
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
 * /users/users:
 *   get:
 *     tags: [Usuários]
 *     summary: Lista todos os usuários
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 * 
 *   post:
 *     tags: [Usuários]
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usuário criado
 */

/**
 * @swagger
 * /users/users/{id}:
 *   put:
 *     tags: [Usuários]
 *     summary: Atualiza um usuário
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuário atualizado
 * 
 *   delete:
 *     tags: [Usuários]
 *     summary: Remove um usuário
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Usuário removido
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Autenticação]
 *     summary: Autentica um usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       401:
 *         description: Credenciais inválidas
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