import {
      getAllLogsService,
  getLogByIdService,
  createLogService,
  updateLogService,
  deleLogService
} from "../service/logAlteracaoDoacao.service.js"

export async function getAllLogs(req,res){
    try{
        const logs = await getAllLogsService();
        res.status(200).json(logs);
    } catch(error){
        res.status(500).json({error:"Erro ao buscar logs."})
    }
}


 export async function getLogById(req,res){
    try{
        const log = await getLogByIdService(req.params.id);
        if(!log) return res.status(404).json({error:"Log não encontrado."});
        res.status(200).json(log);
    } catch(error){
        res.status(500).json({
            error:"Erro ao buscar log."
        })
    }
}

export async function createLog(req,res){
  try {
    const novoLog = await createLogService(req.body);
    res.status(201).json(novoLog);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar log." });
  }
}

export  async function updateLog(req,res){
  try {
    const logAtualizado = await updateLogService(req.params.id, req.body);
    res.status(200).json(logAtualizado);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar log." });
  }
}


export  async function deleteLog(req, res){
     try {
    await deleLogService(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar log." });
  } 
}