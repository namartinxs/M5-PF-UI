let locais = [];

//método GET para retorna os locais cadastrados
export const getLocais = (_, res) => {
  return res.status(200).json(locais);
};

//método POST para adicionar novos locais 
export const postLocal = (req, res) => {
  const { regiao, estado, cidade, endereco } = req.body;

  if (!regiao || !estado || !cidade || !endereco) {
    return res.status(400).json("Todos os campos são obrigatórios.");
  }

  const novoLocal = {
    id: Date.now(),
    regiao,
    estado,
    cidade,
    endereco,
    data_criacao: new Date()
  };

  locais.push(novoLocal);
  return res.status(201).json("Local cadastrado com sucesso.");
};

//método PUT para atualizar locais existentes 
export const updateLocal = (req, res) => {
  const id = parseInt(req.params.id);
  const index = locais.findIndex((l) => l.id === id);

  if (index === -1) return res.status(404).json("Local não encontrado.");

  locais[index] = { ...locais[index], ...req.body };
  return res.status(200).json("Informações do local atualizadas com sucesso.");
};

//métodod DELETE para excluir locais existentes 
export const deleteLocal = (req, res) => {
  const id = parseInt(req.params.id);
  locais = locais.filter((l) => l.id !== id);
  return res.status(200).json("Local removido com sucesso.");
};
