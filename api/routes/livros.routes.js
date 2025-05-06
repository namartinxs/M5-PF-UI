import { Router } from 'express';
import {
  listarLivros,
  criarLivro,
  atualizarLivro,
  deletarLivro
<<<<<<< HEAD
}  from '../controllers/livros.controller.js';
=======
} from '../controllers/livros.controller.js';
>>>>>>> origin/main

const router = Router();

router.get('/', listarLivros);
router.post('/', criarLivro);
router.put('/:id', atualizarLivro);
router.delete('/:id', deletarLivro);

export default router;
