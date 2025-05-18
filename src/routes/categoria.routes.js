import express from 'express';
import * as categoriaController from '../controllers/categoria.controller.js';

const routerCategoria = express.Router();

// Rota para listar todas as categorias
routerCategoria.get('/', categoriaController.listarCategorias);

// Rota para buscar uma categoria por ID
routerCategoria.get('/id/:id', categoriaController.buscarCategoriaPorId);

// Rota para criar uma nova categoria
routerCategoria.post('/', categoriaController.criarCategoria);

// Rota para atualizar uma categoria existente
routerCategoria.put('/:id', categoriaController.atualizarCategoria);

// Rota para excluir (desativar) uma categoria
routerCategoria.delete('/:id', categoriaController.removerCategoria);

export default routerCategoria;