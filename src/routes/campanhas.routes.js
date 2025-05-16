import express from 'express';
import {
    listarCampanhas,
    criarCampanha,
    atualizarCampanha,
    deletarCampanha
} from '../controllers/campanhas.controller.js';

const router = express.Router();
// Rota para listar todos os pedidos de ajuda/campanhas
router.get('/', listarCampanhas);
router.post('/', criarCampanha);
router.put('/:id', atualizarCampanha);
router.delete('/:id', deletarCampanha);

export default router;