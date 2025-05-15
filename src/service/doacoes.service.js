import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

// GET - Buscar todas as doações
export const getDoacoes = async (req, res) => {
  try {
    const doacoes = await prisma.doacao.findMany();
    return res.status(200).json(doacoes);
  } catch (error) {
    console.error("Erro ao buscar doações:", error.message);
    return res.status(500).json({ error: "Erro ao buscar doações." });
  }
};

// POST - Cadastrar nova doação
export const postDoacao = async (req, res) => {
  const {
    valor,
    tipoProduto,
    produto,
    usuarioId,
    campanhaId,
    categoriaId,
    localId,
  } = req.body;

  if (
    !valor || !tipoProduto || !produto || !usuarioId ||
    !campanhaId || !categoriaId || !localId
  ) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  try {
    const novaDoacao = await prisma.doacao.create({
      data: {
        valor,
        tipoProduto,
        produto,
        status: "PENDENTE",
        usuarioId,
        campanhaId,
        categoriaId,
        localId,
      },
    });

    return res.status(201).json({
      message: "Doação cadastrada com sucesso.",
      novaDoacao,
    });
  } catch (error) {
    console.error("Erro ao cadastrar doação:", error.message);
    return res.status(500).json({ error: "Erro ao cadastrar doação." });
  }
};

// PUT - Atualizar doação existente
export const updateDoacao = async (req, res) => {
  const { id } = req.params;
  const {
    valor,
    tipoProduto,
    produto,
    status,
    usuarioId,
    campanhaId,
    categoriaId,
    localId,
  } = req.body;

  if (
    !valor || !tipoProduto || !produto || !status || !usuarioId ||
    !campanhaId || !categoriaId || !localId
  ) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  try {
    const doacaoExistente = await prisma.doacao.findUnique({ where: { id } });

    if (!doacaoExistente) {
      return res.status(404).json({ error: "Doação não encontrada." });
    }

    const doacaoAtualizada = await prisma.doacao.update({
      where: { id },
      data: {
        valor,
        tipoProduto,
        produto,
        status,
        usuarioId,
        campanhaId,
        categoriaId,
        localId,
      },
    });

    return res.status(200).json({
      message: "Doação atualizada com sucesso.",
      doacaoAtualizada,
    });
  } catch (error) {
    console.error("Erro ao atualizar doação:", error.message);
    return res.status(500).json({ error: "Erro ao atualizar doação." });
  }
};

// DELETE - Excluir doação
export const deleteDoacao = async (req, res) => {
  const { id } = req.params;

  try {
    const doacaoExistente = await prisma.doacao.findUnique({ where: { id } });

    if (!doacaoExistente) {
      return res.status(404).json({ error: "Doação não encontrada." });
    }

    await prisma.doacao.delete({ where: { id } });

    return res.status(200).json({ message: "Doação removida com sucesso." });
  } catch (error) {
    console.error("Erro ao remover doação:", error.message);
    return res.status(500).json({ error: "Erro ao remover doação." });
  }
};
