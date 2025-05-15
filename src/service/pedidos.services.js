import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const pedidos = []; // Simulação de banco de dados em memória
let nextId = 1;

function listarPedidos() {
    return pedidos;
}

function buscarPedidoPorId(id) {
    return pedidos.find(p => p.id === id);
}

function criarPedido(dados) {
    const novoPedido = { id: nextId++, ...dados };
    pedidos.push(novoPedido);
    return novoPedido;
}

function atualizarPedido(id, dados) {
    const index = pedidos.findIndex(p => p.id === id);
    if (index === -1) return null;
    pedidos[index] = { ...pedidos[index], ...dados };
    return pedidos[index];
}

function removerPedido(id) {
    const index = pedidos.findIndex(p => p.id === id);
    if (index === -1) return false;
    pedidos.splice(index, 1);
    return true;
}

module.exports = {
    listarPedidos,
    buscarPedidoPorId,
    criarPedido,
    atualizarPedido,
    removerPedido
};