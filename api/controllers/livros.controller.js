let livros = [];

export const listarLivros = (req, res) => {
  return res.status(200).json(livros);
};

export const criarLivro = (req, res) => {
  const { nome, autor, editora, genero, condicao, doador } = req.body;

  if (!nome || !autor || !editora || !genero || !condicao || !doador) {
    return res.status(400).json("Todos os campos são obrigatórios: nome, autor, editora, genero, condicao, doador.");
  }

  const novoLivro = {
    id: Date.now(),
    nome,
    autor,
    editora,
    genero,
    condicao,
    doador,
    data_criacao: new Date()
  };

  livros.push(novoLivro);
  return res.status(201).json("Doação de livro registrada com sucesso.");
};

export const atualizarLivro = (req, res) => {
  const id = parseInt(req.params.id);
  const index = livros.findIndex((l) => l.id === id);

  if (index === -1) return res.status(404).json("Livro não encontrado.");

  livros[index] = { ...livros[index], ...req.body };
  return res.status(200).json("Informações do livro atualizadas com sucesso.");
};

export const deletarLivro = (req, res) => {
  const id = parseInt(req.params.id);
  livros = livros.filter((l) => l.id !== id);
  return res.status(200).json("Livro removido com sucesso.");
};
