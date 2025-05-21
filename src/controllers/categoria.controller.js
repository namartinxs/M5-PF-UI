import * as categoriaService from '../service/categoria.service.js';

export async function listarCategorias(req, res) {
  try {
    const categorias = await categoriaService.listarCategorias();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar categorias.' });
  }
}

export async function buscarCategoriaPorId(req, res) {
  try {
    const { id } = req.params;
    const categoria = await categoriaService.buscarCategoriaPorId(id);
    if (!categoria) {
      return res.status(404).json({ error: 'Categoria não encontrada.' });
    }
    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar categoria.' });
  }
}

export async function criarCategoria(req, res) {
  try {
    const dados = req.body;
    const novaCategoria = await categoriaService.criarCategoria(dados);
    res.status(201).json(novaCategoria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar categoria.' });
  }
}

export async function atualizarCategoria(req, res) {
  try {
    const { id } = req.params;
    const dados = req.body;
    const categoriaAtualizada = await categoriaService.atualizarCategoria(id, dados);
    res.status(200).json(categoriaAtualizada);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar categoria.' });
  }
}

export async function removerCategoria(req, res) {
  try {
    const { id } = req.params;
    const categoriaRemovida = await categoriaService.removerCategoria(id);
    res.status(200).json(categoriaRemovida);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover categoria.' });
  }
}