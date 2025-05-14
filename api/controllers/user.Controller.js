// Simulando um banco de dados com um array em memória
let usuarios = [
    {
      id: 1,
      nome: "João Silva",
      email: "joao@email.com",
      fone: "11999999999",
      data_nascimento: "1990-01-01",
    },
];
  
  // GET - Retorna todos os usuários
  export const getUsers = (req, res) => {
    return res.status(200).json(usuarios);
  };
   
  // POST - Adiciona um novo usuário
  export const addUser = (req, res) => {
    const novoUsuario = {
      id: Date.now(), // gera um ID simples
      nome: req.body.nome,
      email: req.body.email,
      fone: req.body.fone,
      data_nascimento: req.body.data_nascimento,
    };
  
    usuarios.push(novoUsuario);
    return res.status(201).json("Usuário criado com sucesso.");
  };
  
  // PUT - Atualiza um usuário pelo ID
  export const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const index = usuarios.findIndex((u) => u.id === id);
  
    if (index === -1) return res.status(404).json("Usuário não encontrado.");
  
    usuarios[index] = { ...usuarios[index], ...req.body };
    return res.status(200).json("Usuário atualizado com sucesso.");
  };
  
  // DELETE - Remove um usuário pelo ID
  export const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    usuarios = usuarios.filter((u) => u.id !== id);
    return res.status(200).json("Usuário deletado com sucesso.");
  };