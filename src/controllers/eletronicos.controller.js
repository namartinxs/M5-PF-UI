let eletronicos = [];
// Método GET para listar eletronicos com filtro opcional
export const getEletronico = (req, res) => {
    return res.status(200).json(eletronicos);
    }


    // Método POST para cadastrar novos eletronicos
export const cadastrarEletronico = (req, res) => {
    const { nome, marca, modelo, ano, preco } = req.body;

    if (!nome || !marca || !modelo || !ano || !preco) {
        return res.status(400).json("Todos os campos são obrigatórios.");
    }

    const novoEletronico = {
        id: Date.now(),
        nome,
        marca,
        modelo,
        ano,
        preco,
        data_criacao: new Date()
    };

    eletronicos.push(novoEletronico);
    return res.status(201).json({ mensagem: "Eletrônico cadastrado com sucesso.", eletronico: novoEletronico });
};


// Método PUT para atualizar informações de eletronicos
export const atualizarEletronico = (req, res) => {
    const id = parseInt(req.params.id);
    const index = eletronicos.findIndex((l) => l.id === id);

    if (index === -1) return res.status(404).json("Eletrônico não encontrado.");

    eletronicos[index] = { ...eletronicos[index], ...req.body };
    return res.status(200).json("Informações do eletrônico atualizadas com sucesso.");
};

// Método DELETE para excluir eletronicos
export const deleteEletronico = (req, res) => {
    const id = parseInt(req.params.id);
    const antes = eletronicos.length;

    eletronicos = eletronicos.filter((l) => l.id !== id);

    if (eletronicos.length === antes) {
        return res.status(404).json("Eletrônico não encontrado.");
    }

    return res.status(200).json("Eletrônico removido e adotado com sucesso.");
};