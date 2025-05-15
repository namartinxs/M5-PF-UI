import {listarPedidos, buscarPedidoPorId, criarPedido, atualizarPedido, deletarPedido} 
from './pedidos.controller.js';



// Função para listar todos os pedidos de ajuda/campanhas
function listarPedidos(req, res) {
    res.json(pedidosDeAjuda);
}

// Função para buscar um pedido por ID
function buscarPedidoPorId(req, res) {
    const pedido = pedidosDeAjuda.find(p => p.id === parseInt(req.params.id));
    if (!pedido) {
        return res.status(404).json({ error: 'Pedido de ajuda/campanha não encontrado.' });
    }
    res.json(pedido);
}

// Função para criar novo pedido de ajuda/campanha
function criarPedido(req, res) {
    const { titulo, descricao, usuarioId, dataLimite } = req.body;
    if (!titulo || !descricao || !usuarioId) {
        return res.status(400).json({ error: 'Campos obrigatórios não preenchidos.' });
    }
    const novoPedido = {
        id: pedidosDeAjuda.length + 1,
        titulo,
        descricao,
        usuarioId,
        dataLimite,
        criadoEm: new Date()
    };
    pedidosDeAjuda.push(novoPedido);
    res.status(201).json(novoPedido);
}

// Função para atualizar pedido de ajuda/campanha
function atualizarPedido(req, res) {
    const pedido = pedidosDeAjuda.find(p => p.id === parseInt(req.params.id));
    if (!pedido) {
        return res.status(404).json({ error: 'Pedido de ajuda/campanha não encontrado.' });
    }
    const { titulo, descricao, dataLimite } = req.body;
    if (titulo) pedido.titulo = titulo;
    if (descricao) pedido.descricao = descricao;
    if (dataLimite) pedido.dataLimite = dataLimite;
    res.json(pedido);
}

// Função para deletar pedido de ajuda/campanha
function deletarPedido(req, res) {
    const index = pedidosDeAjuda.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'Pedido de ajuda/campanha não encontrado.' });
    }
    pedidosDeAjuda.splice(index, 1);
    res.status(204).send();
}



// Exportando as funções
export { listarPedidos, buscarPedidoPorId, criarPedido, atualizarPedido, deletarPedido };