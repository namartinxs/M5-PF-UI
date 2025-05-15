import express from 'express';
import {
    listarPedidos,
    buscarPedidoPorId,
    criarPedido,
    atualizarPedido,
    deletarPedido
} from '../controllers/pedidos.controller.js';

const router = express.Router();
// Rota para listar todos os pedidos de ajuda/campanhas
router.get('/', listarPedidos);
router.get('/:id', buscarPedidoPorId);
router.post('/', criarPedido);
router.put('/:id', atualizarPedido);
router.delete('/:id', deletarPedido);

module.exports = router;