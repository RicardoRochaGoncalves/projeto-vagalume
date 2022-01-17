var estabelecimentoModel = require('../models/estabelecimento')

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message: 'O formulário não pode estar vazio'})
        return
    }

    const estabelecimento = new estabelecimentoModel({
        nome: req.body.nome,
        endereco: req.body.endereco,
        categoria: req.body.categoria
    })

    estabelecimento.save(estabelecimento).then(data => {
        // res.send(data)
        res.redirect('/add-estabelecimento')
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Um erro ocorreu na operação create"
        })
    })

}

exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id
        estabelecimentoModel.findById(id).then(data =>{
            if(!data){
                res.status(404).send({message: `Não foi encontrado o estabelecimento com ID:${id}`})
            }else{
                res.send(data)
            }
        }).catch(err => {
            res.status(500).send({message: `Erro ao tentar recuperar informações do estabelecimento com ID: ${id}`})
        })
    }else{
        estabelecimentoModel.find().then(estabelecimento => {
            res.send(estabelecimento)
        }).catch(err => {
            res.status(500).send({message: err.message || "Erro ocorreu ao recuperar a informação do estabelecimento"})
        })
    }

    
}

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'As informações para alteração não podem estar vazias'})
    }
    
    const id = req.params.id
    estabelecimentoModel.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
        if(!data){
            res.status(404).send({message: `Nao foi possível alterar o estabelecimento com o id ${id}, 
            talvez o estabelecimento não tenha sido encontrado!`})
        }else{
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({message: "Erro ao alterar as informações do estabelecimento"})
    })
}

exports.delete = (req, res) => {
    const id = req.params.id
    estabelecimentoModel.findByIdAndDelete(id).then(data => {
        if(!data){
            res.status(404).send({message: `Não foi possível deletar o estabelecimento com ID: ${id}, por favor verifique o ID.`})
        }else{
            res.send({
                message: "Estabelecimento deletado com sucesso."
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `Não foi possível deletar o estabelecimento com ID:${id}`
        })
    })
}