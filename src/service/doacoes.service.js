import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// GET - Buscar todas as doações
export const getDoacoes = async () => {
  return await prisma.doacao.findMany();
};

// POST - Cadastrar nova doação
export const postDoacao = async (dados) => {
  return await prisma.doacao.create({
    data: {
      ...dados,
    },
  });
};

// PUT - Atualizar doação existente
export const updateDoacao = async (id, dados) => {
  const doacaoExistente = await prisma.doacao.findUnique({ where: { id } });
  if (!doacaoExistente) return null;

  return await prisma.doacao.update({
    where: { id },
    data: {
      ...dados,
    },
  });
};

// DELETE - Excluir doação
export const deleteDoacao = async (id) => {
  const doacaoExistente = await prisma.doacao.findUnique({ where: { id } });
  if (!doacaoExistente) return null;

  return await prisma.doacao.delete({ where: { id } });
};
