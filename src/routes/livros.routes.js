import { Router } from 'express';
import {
  listarLivros,
  criarLivro,
  atualizarLivro,
  deletarLivro

}  from '../controllers/livros.controller.js';
 
const router = Router();

router.get('/', listarLivros);
router.post('/', criarLivro);
router.put('/:id', atualizarLivro);
router.delete('/:id', deletarLivro);

export default router;
