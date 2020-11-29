const Faturamento = require('../model/Faturamento')

const controller = {}   //Objeto vazio

// Operação CREATE, função novo()
controller.novo = async (req, res) => {
    // Usa os dados que chegam dentro do body da requisição
    //e os envia ao BD para a criação de um novo objeto
    try {
        await Faturamento.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(erro){
        console.log(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

// Operação RETRIEVE (all), função listar()
controller.listar = async (req, res) => {
    try{
        let dados = await Faturamento.find()
            .populate('nota') // Traz dados da nota fiscal cadastrada
            .populate('usuario', 'nome_usuario') 
        res.send(dados) // Vai com status HTTP 200
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

// Operação RETRIEVE (one), função obterUm()
controller.obterUm = async (req, res) => {
    try{
        // Capturando o parâmetro id da URL
        const id = req.params.id
        let obj = await Faturamento.findById(id)

    // O objeto existe e foi encontrato
    if(obj) res.send(obj)   // HTTP 200
    // Não encontrado
    else res.status(404).end()
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

// Operação UPDATE, função atualizar()
controller.atualizar = async (req, res) => {
    try{
        // Isolar o _id do objeto que está sendo alterado
        const id = req.body._id

        // Busca e substituição do conteúdo do  objeto
        let ret = await Faturamento.findByIdAndUpdate(id, req.body)

        // Se encontrou e atualizou, retornamos HTTP 204: No content
        if(ret) res.status(204).end()
        // Não encontrou o objeto para ser alterado, retorno HTTP 404: Not found
        else res.status(404).end()
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

// Operação DELETE, função excluir()
controller.excluir = async (req, res) => {
   try{
        // Isolando o id
        const id = req.body._id

        // Busca pelo id e exclusão
        let ret = await Faturamento.findByIdAndDelete(id)

        // Encontrou e excluiu, HTTP 204: No content
        if(ret) res.status(204).end()
        // Não encontrou, HTTP 404: Not found
        else res.status(404).end()
   }
   catch(erro){
       console.log(erro)
       res.status(500).send(erro)
   }
}


module.exports = controller