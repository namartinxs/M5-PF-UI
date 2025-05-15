import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// GET - Buscar todos os locais
export const getLocais = async () => {
  return await prisma.local.findMany();
};

// POST - Cadastrar novo local
export const postLocal = async (dados) => {
  return await prisma.local.create({
    data: {
      ...dados,
    },
  });
};

// PUT - Atualizar local existente
export const updateLocal = async (id, dados) => {
  const localExistente = await prisma.local.findUnique({ where: { id } });
  if (!localExistente) return null;

  return await prisma.local.update({
    where: { id },
    data: {
      ...dados,
    },
  });
};

// DELETE - Excluir local
export const deleteLocal = async (id) => {
  const localExistente = await prisma.local.findUnique({ where: { id } });
  if (!localExistente) return null;

  return await prisma.local.delete({ where: { id } });
};
