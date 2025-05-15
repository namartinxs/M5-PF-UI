import {
  getAllFeedbacksService,
  createFeedbackService,
  getFeedbackByIdService,
  updateFeedbackService,
  deleteFeedbackService,
} from "../service/feedbacks.service.js";

// Busca todos os feedbacks
export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await getAllFeedbacksService();
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Erro ao buscar feedbacks:", error.message);
    res.status(500).json({ error: "Erro ao buscar feedbacks." });
  }
};

// cria um novo feedback
export const createFeedback = async (req, res) => {
  const { usuarioId, doacaoId, campanhaId, mensagem, nota = 5 } = req.body;

  if (!usuarioId || !mensagem) {
    return res.status(400).json({ error: "Usuário e mensagem são obrigatórios." });
  }

  try {
    const novoFeedback = await createFeedbackService({
      usuarioId,
      doacaoId,
      campanhaId,
      mensagem,
      nota,
    });

    res.status(201).json({ message: "Feedback cadastrado com sucesso.", novoFeedback });
  } catch (error) {
    console.error("Erro ao cadastrar feedback:", error.message);
    res.status(500).json({ error: "Erro ao cadastrar feedback." });
  }
};

// Atualiza um feedback existente
export const updateFeedback = async (req, res) => {
  const id = req.params.id;

  try {
    const feedbackExistente = await getFeedbackByIdService(id);

    if (!feedbackExistente) {
      return res.status(404).json({ error: "Feedback não encontrado." });
    }

    const feedbackAtualizado = await updateFeedbackService(id, req.body);

    res.status(200).json({ message: "Feedback atualizado com sucesso.", feedbackAtualizado });
  } catch (error) {
    console.error("Erro ao atualizar feedback:", error.message);
    res.status(500).json({ error: "Erro ao atualizar feedback." });
  }
};

// Delete the feedback
export const deleteFeedback = async (req, res) => {
  const id = req.params.id;

  try {
    const feedbackExistente = await getFeedbackByIdService(id);

    if (!feedbackExistente) {
      return res.status(404).json({ error: "Feedback não encontrado." });
    }

    
    await deleteFeedbackService(id);

    res.status(200).json({ message: "Feedback removido com sucesso." });
  } catch (error) {
    console.error("Erro ao remover feedback:", error.message);
    res.status(500).json({ error: "Erro ao remover feedback." });
  }
};
