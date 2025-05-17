import { getLocais, postLocal, updateLocal, deleteLocal } from '../service/locais.service.js';



class LugaresController {

  async getLocais(req, res) {
    try {
      const lugares = await getLocais();
      res.status(200).json({ lugares });
    } catch (error) {
      console.error("Erro ao buscar locais:", error.message);
      res.status(500).json({ message: "Erro ao buscar locais." });
    }
  }

  async cadastraLocal(req, res) {
    const { 
      cidade, 
      estado, 
      pais, 
      doacoes 
    } = req.body;

    //validação de dados
    if (!cidade || !estado || !pais || !doacoes) {
      return res.status(400).json({
        message: "Você deve fornecer todos os campos",
      });
    }

    try {
      const local = await postLocal({
        cidade,
        estado,
        pais,
        doacoes,
      });

      res.status(201).json({
        message: "Local cadastrado com sucesso!",
        local,
      });
    } catch (error) {
      console.error("Erro ao cadastrar local:", error.message);
      res.status(500).json({ message: "Erro ao cadastrar local." });
    }
  }

  async deleteLocais(req, res) {
    const { id } = req.params;

    try {
      const local = await deleteLocal(id);

      if (!local) {
        return res.status(404).json({
          message: "Local não encontrado.",
        });
      }

      res.status(200).json({
        message: "Local deletado com sucesso!",
        localDeletado: local,
      });
    } catch (error) {
      console.error("Erro ao deletar local:", error.message);
      res.status(500).json({ message: "Erro ao deletar local." });
    }
  }

  async atualizaLocal(req, res) {
    const { id } = req.params;
    const { cidade, estado, pais, doacoes } = req.body;

    if (!cidade || !estado || !pais || !doacoes) {
      return res.status(400).json({
        message: "Você deve fornecer todos os campos para atualizar.",
      });
    }

    try {
      const localAtualizado = await updateLocal(id, {
        cidade,
        estado,
        pais,
        doacoes,
      });

      if (!localAtualizado) {
        return res.status(404).json({
          message: "Local não encontrado.",
        });
      }

      res.status(200).json({
        message: "Local atualizado com sucesso!",
        localAtualizado,
      });
    } catch (error) {
      console.error("Erro ao atualizar local:", error.message);
      res.status(500).json({ message: "Erro ao atualizar local." });
    }
  }
}

export default new LugaresController();
