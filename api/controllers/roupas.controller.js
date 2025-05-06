const roupas = [];

export function getByRoupas(req,res){
    return res.status(200).json(roupas)
}

export function postByRoupas(req,res){
    const {peça, cor, marcar, tamanho , gênero} = req.body

    if (!peça || !cor || !marcar || !tamanho || !gênero ) {
        return res.status(400).json("Todos os campos são obrigatórios");
      }

      const newRoupas = {
        id: Date.now(),
        peça,
        cor,
        marcar,
        tamanho,
        gênero,
        data_criacao: new Date()
      }

      roupas.push(newRoupas)
      return res.status(201).json("Usuário criado com sucesso.");
}

export function updateByRoupas(req,res){
    const id = req.params.id
    const index = roupas.findIndex((r)=>r.id === id);

  

    roupas[index] = {...roupas[index], ...req.body};
    return res.status(200).json("Roupa atualizada com sucesso.")
}


export function deleteByRoupas(req,res){
    const id = req.params.id;
    const index = roupas.findIndex((r)=> r.id === id );

    roupas.splice(index,1);
    return res.status(200).json("Roupa deletada com sucesso.");
}