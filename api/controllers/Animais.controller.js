let animais = [];

// Método GET para listar animais com filtro opcional
export const getAnimais = (req, res) => {
  return res.status(200).json(animais);
};


// Método POST para cadastrar novos animais
export const cadastrarAnimal = (req, res) => {
  const { nome, raca, idade, genero, peso } = req.body;

  if (!nome || !raca || !idade || !genero || !peso) {
    return res.status(400).json("Todos os campos são obrigatórios.");
  }

  const novoAnimal = {
    id: Date.now(),
    nome,
    raca,
    idade,
    genero,
    peso,
    data_criacao: new Date()
  };

  animais.push(novoAnimal);
  return res.status(201).json({ mensagem: "Animal cadastrado com sucesso.", animal: novoAnimal });
};

// Método PUT para atualizar informações de animais
export const atualizarAnimal = (req, res) => {
  const id = parseInt(req.params.id);
  const index = animais.findIndex((l) => l.id === id);

  if (index === -1) return res.status(404).json("Animal não encontrado.");

  animais[index] = { ...animais[index], ...req.body };
  return res.status(200).json("Informações do animal atualizadas com sucesso.");
};

// Método DELETE para excluir animais
export const deleteAnimal = (req, res) => {
  const id = parseInt(req.params.id);
  const antes = animais.length;

  animais = animais.filter((l) => l.id !== id);

  if (animais.length === antes) {
    return res.status(404).json("Animal não encontrado.");
  }

  return res.status(200).json("Animal removido e adotado com sucesso.");
};
