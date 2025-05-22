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
    ],    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT', // Indica que o token é JWT
        },
      },
    },
    security: [
      {
        bearerAuth: [], // Aplica o esquema de segurança globalmente
      },
    ],
  },
  apis: ['./src/swagger.js'], // Caminho para os arquivos da doc swagger

};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };

/**
 * @swagger
 * tags:
 *   - name: Campanhas
 *     description: Operações relacionadas às campanhas
 *
 * /campanhas:
 *   get:
 *     tags: [Campanhas]
 *     summary: Lista todas as campanhas
 *     responses:
 *       200:
 *         description: Lista de campanhas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   titulo:
 *                     type: string
 *                   descricao:
 *                     type: string
 *                   usuarioId:
 *                     type: string
 *                   dataLimite:
 *                     type: string
 *                     format: date
 *                   criadoEm:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Erro interno ao listar campanhas
 *
 *   post:
 *     tags: [Campanhas]
 *     summary: Cria uma nova campanha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - descricao
 *               - usuarioId
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: Campanha do Agasalho
 *               descricao:
 *                 type: string
 *                 example: Arrecadação de roupas para o inverno
 *               usuarioId:
 *                 type: string
 *                 example: "abc123"
 *               dataLimite:
 *                 type: string
 *                 format: date
 *                 example: "2025-06-30"
 *     responses:
 *       201:
 *         description: Campanha criada com sucesso
 *       400:
 *         description: Campos obrigatórios não preenchidos
 *       500:
 *         description: Erro ao criar campanha
 *
 * /campanhas/{id}:
 *   put:
 *     tags: [Campanhas]
 *     summary: Atualiza uma campanha existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da campanha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               dataLimite:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Campanha atualizada com sucesso
 *       404:
 *         description: Campanha não encontrada ou erro ao atualizar
 *
 *   delete:
 *     tags: [Campanhas]
 *     summary: Deleta uma campanha
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da campanha
 *     responses:
 *       204:
 *         description: Campanha deletada com sucesso (sem conteúdo)
 *       404:
 *         description: Campanha não encontrada ou erro ao deletar
 */

/**
 * @swagger
 * tags:
 *   - name: Categorias
 *     description: Operações relacionadas às categorias
 *
 * /categorias:
 *   get:
 *     tags: [Categorias]
 *     summary: Lista todas as categorias
 *     responses:
 *       200:
 *         description: Lista de categorias retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   nome:
 *                     type: string
 *                     example: Alimentos
 *       500:
 *         description: Erro interno ao listar categorias
 *
 *   post:
 *     tags: [Categorias]
 *     summary: Cria uma nova categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Roupas
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *       500:
 *         description: Erro ao criar categoria
 *
 * /categorias/id/{id}:
 *   get:
 *     tags: [Categorias]
 *     summary: Busca uma categoria pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da categoria
 *     responses:
 *       200:
 *         description: Categoria encontrada com sucesso
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro ao buscar categoria
 *
 * /categorias/{id}:
 *   put:
 *     tags: [Categorias]
 *     summary: Atualiza uma categoria existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Higiene
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso
 *       500:
 *         description: Erro ao atualizar categoria
 *
 *   delete:
 *     tags: [Categorias]
 *     summary: Remove uma categoria existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da categoria
 *     responses:
 *       200:
 *         description: Categoria removida com sucesso
 *       500:
 *         description: Erro ao remover categoria
 */

/**
 * @swagger
 * tags:
 *   - name: Doações
 *     description: Operações relacionadas às doações
 *
 * /doacoes:
 *   get:
 *     tags: [Doações]
 *     summary: Lista todas as doações
 *     responses:
 *       200:
 *         description: Lista de doações retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 doacoes:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Erro ao buscar doações
 *
 * /doacoes/cadastro:
 *   post:
 *     tags: [Doações]
 *     summary: Cadastra uma nova doação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - valor
 *               - tipoProduto
 *               - produto
 *               - usuarioId
 *               - campanhaId
 *               - categoriaId
 *               - localId
 *             properties:
 *               valor:
 *                 type: number
 *                 example: 100
 *               tipoProduto:
 *                 type: string
 *                 example: Produto
 *               produto:
 *                 type: string
 *                 example: Cesta Básica
 *               usuarioId:
 *                 type: string
 *               campanhaId:
 *                 type: string
 *               categoriaId:
 *                 type: string
 *               localId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Doação cadastrada com sucesso
 *       400:
 *         description: Campos obrigatórios não preenchidos
 *       500:
 *         description: Erro ao cadastrar doação
 *
 * /doacoes/update/{id}:
 *   put:
 *     tags: [Doações]
 *     summary: Atualiza uma doação existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da doação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - valor
 *               - tipoProduto
 *               - produto
 *               - status
 *               - usuarioId
 *               - campanhaId
 *               - categoriaId
 *               - localId
 *             properties:
 *               valor:
 *                 type: number
 *                 example: 120
 *               tipoProduto:
 *                 type: string
 *                 example: Serviço
 *               produto:
 *                 type: string
 *                 example: Corte de cabelo
 *               status:
 *                 type: string
 *                 example: Aprovado
 *               usuarioId:
 *                 type: string
 *               campanhaId:
 *                 type: string
 *               categoriaId:
 *                 type: string
 *               localId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Doação atualizada com sucesso
 *       400:
 *         description: Campos obrigatórios não preenchidos
 *       404:
 *         description: Doação não encontrada
 *       500:
 *         description: Erro ao atualizar doação
 *
 * /doacoes/delete/{id}:
 *   delete:
 *     tags: [Doações]
 *     summary: Deleta uma doação existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da doação
 *     responses:
 *       200:
 *         description: Doação deletada com sucesso
 *       404:
 *         description: Doação não encontrada
 *       500:
 *         description: Erro ao deletar doação
 */

/**
 * @swagger
 * tags:
 *   - name: Feedbacks
 *     description: Operações relacionadas aos feedbacks
 *
 * /feedbacks:
 *   get:
 *     tags: [Feedbacks]
 *     summary: Lista todos os feedbacks
 *     responses:
 *       200:
 *         description: Lista de feedbacks retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Erro ao buscar feedbacks
 *
 *   post:
 *     tags: [Feedbacks]
 *     summary: Cria um novo feedback
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - usuarioId
 *               - mensagem
 *             properties:
 *               usuarioId:
 *                 type: string
 *               doacaoId:
 *                 type: string
 *               campanhaId:
 *                 type: string
 *               mensagem:
 *                 type: string
 *                 example: Ótima campanha!
 *               nota:
 *                 type: number
 *                 example: 5
 *     responses:
 *       201:
 *         description: Feedback criado com sucesso
 *       400:
 *         description: Campos obrigatórios ausentes
 *       500:
 *         description: Erro ao criar feedback
 *
 * /feedbacks/{id}:
 *   put:
 *     tags: [Feedbacks]
 *     summary: Atualiza um feedback existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do feedback
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mensagem:
 *                 type: string
 *               nota:
 *                 type: number
 *     responses:
 *       200:
 *         description: Feedback atualizado com sucesso
 *       404:
 *         description: Feedback não encontrado
 *       500:
 *         description: Erro ao atualizar feedback
 *
 *   delete:
 *     tags: [Feedbacks]
 *     summary: Remove um feedback existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do feedback
 *     responses:
 *       200:
 *         description: Feedback removido com sucesso
 *       404:
 *         description: Feedback não encontrado
 *       500:
 *         description: Erro ao remover feedback
 */

/**
 * @swagger
 * tags:
 *   - name: Locais
 *     description: Operações relacionadas aos locais de doações
 *
 * /locais:
 *   get:
 *     tags: [Locais]
 *     summary: Lista todos os locais
 *     responses:
 *       200:
 *         description: Lista de locais retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 lugares:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Erro ao buscar locais
 *
 * /locais/cadastro:
 *   post:
 *     tags: [Locais]
 *     summary: Cadastra um novo local
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cidade
 *               - estado
 *               - pais
 *               - doacoes
 *             properties:
 *               cidade:
 *                 type: string
 *               estado:
 *                 type: string
 *               pais:
 *                 type: string
 *               doacoes:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Local cadastrado com sucesso
 *       400:
 *         description: Campos obrigatórios ausentes
 *       500:
 *         description: Erro ao cadastrar local
 *
 * /locais/update/{id}:
 *   put:
 *     tags: [Locais]
 *     summary: Atualiza um local existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do local
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cidade
 *               - estado
 *               - pais
 *               - doacoes
 *             properties:
 *               cidade:
 *                 type: string
 *               estado:
 *                 type: string
 *               pais:
 *                 type: string
 *               doacoes:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Local atualizado com sucesso
 *       400:
 *         description: Campos obrigatórios ausentes
 *       404:
 *         description: Local não encontrado
 *       500:
 *         description: Erro ao atualizar local
 *
 * /locais/delete/{id}:
 *   delete:
 *     tags: [Locais]
 *     summary: Remove um local existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do local
 *     responses:
 *       200:
 *         description: Local deletado com sucesso
 *       404:
 *         description: Local não encontrado
 *       500:
 *         description: Erro ao deletar local
 */

/**
 * @swagger
 * tags:
 *   - name: logs-alteracao-alteracao
 *     description: Operações relacionadas a logs-alteracao de alteração de doações
 *
 * /logs-alteracao:
 *   get:
 *     tags: [logs-alteracao]
 *     summary: Lista todos os logs-alteracao de alteração de doações
 *     responses:
 *       200:
 *         description: Lista de logs-alteracao retornada com sucesso
 *       500:
 *         description: Erro ao buscar logs-alteracao
 *
 *   post:
 *     tags: [logs-alteracao]
 *     summary: Cria um novo log de alteração
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               doacaoId: "123"
 *               usuarioId: "456"
 *               tipoAlteracao: "UPDATE"
 *               detalhes: "Alteração de quantidade"
 *     responses:
 *       201:
 *         description: Log criado com sucesso
 *       400:
 *         description: Erro ao criar log
 *
 * /logs-alteracao/{id}:
 *   get:
 *     tags: [logs-alteracao]
 *     summary: Retorna um log específico por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do log
 *     responses:
 *       200:
 *         description: Log encontrado
 *       404:
 *         description: Log não encontrado
 *       500:
 *         description: Erro ao buscar log
 *
 *   put:
 *     tags: [logs-alteracao]
 *     summary: Atualiza um log existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do log a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               tipoAlteracao: "DELETE"
 *               detalhes: "Item excluído pelo usuário X"
 *     responses:
 *       200:
 *         description: Log atualizado com sucesso
 *       400:
 *         description: Erro ao atualizar log
 *
 *   delete:
 *     tags: [logs-alteracao]
 *     summary: Deleta um log existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do log a ser deletado
 *     responses:
 *       204:
 *         description: Log deletado com sucesso
 *       400:
 *         description: Erro ao deletar log
 */


/**
 * @swagger
 * tags:
 *   - name: Usuários
 *     description: Operações relacionadas aos usuários do sistema
 *
 * /users:
 *   post:
 *     tags: [Usuários]
 *     summary: Cadastra um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *               - senha
 *               - tipo
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               tipo:
 *                 type: string
 *                 enum: [ADMIN, DOADOR, DONATARIO]
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Dados inválidos ou e-mail já cadastrado
 *       500:
 *         description: Erro interno do servidor
 *
 * /users/login:
 *   post:
 *     tags: [Usuários]
 *     summary: Realiza login e retorna o token JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro interno do servidor
 *
 * /users/reset-password:
 *   post:
 *     tags: [Usuários]
 *     summary: Envia email para redefinição de senha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Instruções de redefinição enviadas
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 *
 * /users/me:
 *   get:
 *     tags: [Usuários]
 *     summary: Retorna os dados do usuário logado
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dados do usuário retornados com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 *
 * /users/users:
 *   get:
 *     tags: [Usuários]
 *     summary: Lista todos os usuários (requer ADMIN)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 *
 * /users/users/{id}:
 *   put:
 *     tags: [Usuários]
 *     summary: Edita um usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário a ser editado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               tipoUsuario:
 *                 type: string
 *                 enum: [ADMIN, DOADOR, DONATARIO]
 *     responses:
 *       200:
 *         description: Usuário editado com sucesso
 *       500:
 *         description: Erro interno do servidor
 *
 *   delete:
 *     tags: [Usuários]
 *     summary: Deleta um usuário
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário a ser deletado
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
