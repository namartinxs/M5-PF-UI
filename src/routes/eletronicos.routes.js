import express from 'express';

import 
{ getEletronico, atualizarEletronico,  cadastrarEletronico, deleteEletronico } 

from '../controllers/eletronicos.controller.js';

const router = express.Router(); 

router.get('/', getEletronico); // Rota para listar todos os eletrônicos
router.put('/:id', atualizarEletronico); // Rota para listar um eletrônico específico pelo ID
router.post('/', cadastrarEletronico); // Rota para criar um novo eletrônico
router.delete('/:id', deleteEletronico); // Rota para deletar um eletrônico pelo ID

export default router;