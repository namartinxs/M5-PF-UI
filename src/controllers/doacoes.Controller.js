import {getDoacoes, postDoacao, updateDoacao,deleteDoacao,} 
from "../service/doacoes.service.js";
  
  
  class DoacoesController {
    async getDoacoes(req, res) {
      try {
        const doacoes = await getDoacoes();
        res.status(200).json({ doacoes });
      } catch (error) {
        console.error("Erro ao buscar doações:", error.message);
        res.status(500).json({ message: "Erro ao buscar doações." });
      }
    }
  
    async cadastraDoacao(req, res) {
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
        !valor ||
        !tipoProduto ||
        !produto ||
        !usuarioId ||
        !campanhaId ||
        !categoriaId ||
        !localId
      ) {
        return res.status(400).json({ message: "Você deve fornecer todos os campos." });
      }
  
      try {
        await logEvents("Cadastrando doação", "cadastraDoacao.log");
  
        const doacao = await postDoacao({
          valor,
          tipoProduto,
          produto,
          usuarioId,
          campanhaId,
          categoriaId,
          localId,
          status: StatusDoacao.PENDENTE, 
        });
  
        res.status(201).json({
          message: "Doação cadastrada com sucesso!",
          doacao,
        });
      } catch (error) {
        console.error("Erro ao cadastrar doação:", error.message);
        res.status(500).json({ message: "Erro ao cadastrar doação." });
      }
    }
  
    async deleteDoacao(req, res) {
      const { id } = req.params;
  
      try {
        const doacao = await deleteDoacao(id);
  
        if (!doacao) {
          return res.status(404).json({ message: "Doação não encontrada."
           });
        }
  
        res.status(200).json({
          message: "Doação deletada com sucesso!",
          doacaoDeletada: doacao,
        });
      } catch (error) {
        console.error("Erro ao deletar doação:", error.message);
        res.status(500).json({ message: "Erro ao deletar doação." });
      }
    }
  
    async atualizaDoacao(req, res) {
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
        !valor ||
        !tipoProduto ||
        !produto ||
        !status ||
        !usuarioId ||
        !campanhaId ||
        !categoriaId ||
        !localId
      ) {
        return res.status(400).json({ message: "Você deve fornecer todos os campos para atualizar." });
      }
  
      try {
        const doacaoAtualizada = await updateDoacao(id, {
          valor,
          tipoProduto,
          produto,
          status,
          usuarioId,
          campanhaId,
          categoriaId,
          localId,
        });
  
        if (!doacaoAtualizada) {
          return res.status(404).json({
             message: "Doação não encontrada." 
            });
        }
  
        res.status(200).json({
          message: "Doação atualizada com sucesso!",
          doacaoAtualizada,
        });
      } catch (error) {
        console.error("Erro ao atualizar doação:", error.message);
        res.status(500).json({ message: "Erro ao atualizar doação." });
      }
    }
  }
  
  export default new DoacoesController();
  