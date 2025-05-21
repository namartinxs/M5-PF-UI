import {
    listarCampanhas as listarCampanhasService,
    criarCampanha as criarCampanhaService,
    atualizarCampanha as atualizarCampanhaService,
    removerCampanha as removerCampanhaService
} from '../service/campanhas.service.js';

// Listar todos os campanha
async function listarCampanhas(req, res) {
    try {
        const campanha = await listarCampanhasService();
        res.json(campanha);
    } catch (error) {
        console.error('Erro ao listar campanha:', error);
        res.status(500).json({ error: 'Erro ao listar campanha.' });
    }
}



// Criar novo pedido
async function criarCampanha(req, res) {
    const { titulo, descricao, usuarioId, dataLimite } = req.body;
    if (!titulo || !descricao || !usuarioId) {
        return res.status(400).json({ error: 'Campos obrigatórios não preenchidos.' });
    }
    try {
        const novoCampanha = await criarCampanhaService({
            titulo,
            descricao,
            usuarioId: usuarioId,
            dataLimite,
            criadoEm: new Date()
        });
        res.status(201).json(novoCampanha);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar pedido.' });
    }
}

// Atualizar pedido
async function atualizarCampanha(req, res) {
    const { titulo, descricao, dataLimite } = req.body;
    try {
        const pedidoAtualizado = await atualizarCampanhaService(req.params.id, {
            titulo,
            descricao,
            dataLimite
        });
        res.json(pedidoAtualizado);
    } catch (error) {
        res.status(404).json({ error: 'Campanha não encontrado ou erro ao atualizar.' });
    }
}

// Remover pedido
async function deletarCampanha(req, res) {
    try {
        await removerCampanhaService(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: 'Campanha não encontrado ou erro ao deletar.' });
    }
}

export {
    listarCampanhas,
    criarCampanha,
    atualizarCampanha,
    deletarCampanha
};