let tipoProduto = [];

//método GET para retorna os produtos cadastrados
export const getProduto = (_, res) => {
  return res.status(200).json(tipoProduto);
};

//método POST para adicionar novos produtos 
export const postProduto = (req, res) => {
  const { tipo } = req.body;

  if (!tipo) {
    return res.status(400).json("O tipo do produto é obrigatório");
  }

  const novoProduto = {
    id: Date.now(),
    nome,
    data_criacao: new Date()
  };

  tipoProduto.push(novoProduto);
  return res.status(201).json("Produto cadastrado com sucesso.");
};

//método PUT para atualizar produtos existentes 
export const updateProduto = (req, res) => {
  const id = parseInt(req.params.id);
  const index = tipoProduto.findIndex((l) => l.id === id);

  if (index === -1) return res.status(404).json("Produto não encontrado.");

  tipoProduto[index] = { ...tipoProduto[index], ...req.body };
  return res.status(200).json("O produto foi atualizado com sucesso.");
};

//métodod DELETE para excluir produtos existentes 
export const deleteProduto = (req, res) => {
  const id = parseInt(req.params.id);
  tipoProduto = tipoProduto.filter((l) => l.id !== id);
  return res.status(200).json("Produto removido com sucesso.");
};
