import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//método GET para retorna os locais cadastrados
export const getLocais = async (req, res) => {
  try {
    const locais = await prisma.local.findMany();
    return res.status(200).json(locais);
  } catch (error) {
    console.error("Erro ao buscar locais:", error.message);
    return res.status(500).json({ error: "Erro ao buscar locais." });
  }
};

//método POST para adicionar novos locais 
export const postLocal = async (req, res) => {
  const { regiao, estado, cidade, endereco } = req.body;

  if (!regiao || !estado || !cidade || !endereco) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  try {
    const novoLocal = await prisma.local.create({
      data: {
        regiao,
        estado,
        cidade,
        endereco,
      },
    });

    return res.status(201).json({ message: "Local cadastrado com sucesso.", novoLocal });
  } catch (error) {
    console.error("Erro ao cadastrar local:", error.message);
    return res.status(500).json({ error: "Erro ao cadastrar local." });
  }
};

//método PUT para atualizar locais existentes 
export const updateLocal = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const localExistente = await prisma.local.findUnique({ where: { id } });

    if (!localExistente) {
      return res.status(404).json({ error: "Local não encontrado." });
    }

    const localAtualizado = await prisma.local.update({
      where: { id },
      data: req.body,
    });

    return res.status(200).json({ message: "Informações do local atualizadas com sucesso.", localAtualizado });
  } catch (error) {
    console.error("Erro ao atualizar local:", error.message);
    return res.status(500).json({ error: "Erro ao atualizar local." });
  }
};

//métodod DELETE para excluir locais existentes 
export const deleteLocal = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const localExistente = await prisma.local.findUnique({ where: { id } });

    if (!localExistente) {
      return res.status(404).json({ error: "Local não encontrado." });
    }

    await prisma.local.delete({ where: { id } });
    return res.status(200).json({ message: "Local removido com sucesso." });
  } catch (error) {
    console.error("Erro ao remover local:", error.message);
    return res.status(500).json({ error: "Erro ao remover local." });
  }
};
