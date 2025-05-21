
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function listarCategorias() {
    return await prisma.categoria.findMany();
}   
export async function buscarCategoriaPorId(id) {
    return await prisma.categoria.findUnique({
        where: { id:id }
    });
}
export async function criarCategoria(dados) {
    return await prisma.categoria.create({ data: dados });
}
export async function atualizarCategoria(id, dados) {
    return await prisma.categoria.update({
        where: { id: id },
        data: dados
    });
}

export async function removerCategoria(id) {
    await prisma.categoria.delete({ where: { id: id } });
    return true;
}