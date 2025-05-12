import { getLocais,postLocal,  updateLocal , deleteLocal} from '../service/locais.service.js'

class LugaresController {
  async getLocais(req,res){
    const lugares = await getLocais();
    res.status(200).json({ lugares});
  }

  async cadastraLocal(req,res){
    const {
      cidade,
      estado,
      pais,
      doacoes
    } = req.body;

    if(
      !cidade || !estado || !pais || !doacoes
    ){
      res.status(400).json({
        message:"Você deve fornecer todos os campos"
      });

      const local = await postLocal({
              cidade,
      estado,
      pais,
      doacoes
      });
      res.status(201).json({
        message:"local cadastrado com sucesso!", animal
      })
    }
    
    
  }
  async deleteLocais(req, res) {
const { id } = req.params;
const local = await deleteLocal(id);
 if(!local){
  return res.status(404).json({
  message:"local não encontrado."
  });
}
res.status(200).json({
  message: "local deltado com sucesso!",localDeletado: local
})
}

async atualizaLocal(req,res){
  const { id } = req.params;
  const {
          cidade,
      estado,
      pais,
      doacoes
  } = req.body;

if(
  !cidade||
  !estado ||
  !pais ||
  !doacoes 
){
     res.status(400).json({ message: "Você deve fornecer todos os campos" });
}
const updated = await updateLocal(id,{          cidade,
      estado,
      pais,
      doacoe});
      if(!updated)
        return res.status(404).json({
      message: "Animal não encontrado."
      })
      res.status(200).json({ message: "Animal atualizado completamente!", animal: updated})
}
}

export default new LugaresController ;