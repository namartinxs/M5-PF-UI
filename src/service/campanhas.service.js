import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function listarCampanhas() {
    return await prisma.campanha.findMany();
}


async function criarCampanha(dados) {
    return await prisma.campanha.create({ data: dados });
}

async function atualizarCampanha(id, dados) {
    return await prisma.campanha.update({
        where: { id: Number(id) },
        data: dados
    });
}

async function removerCampanha(id) {
    await prisma.campanha.delete({ where: { id: Number(id) } });
    return true;
}

export {
    listarCampanhas,
    criarCampanha,
    atualizarCampanha,
    removerCampanha
};