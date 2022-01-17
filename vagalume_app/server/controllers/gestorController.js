var gestorModel = require('../models/gestor')

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message: 'O formulário não pode estar vazio'})
        return
    }

    const gestor = new gestorModel({
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email
    })

    gestor.save(gestor).then(data => {
        // res.send(data)
        res.redirect('/add-gestor')
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Um erro ocorreu na operação create"
        })
    })


}
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id
        gestorModel.findById(id).then(data =>{
            if(!data){
                res.status(404).send({message: `Não foi encontrado o gestor com ID:${id}`})
            }else{
                res.send(data)
            }
        }).catch(err => {
            res.status(500).send({message: `Erro ao tentar recuperar informações do gestor com ID: ${id}`})
        })
    }else{
        gestorModel.find().then(gestor => {
            res.send(gestor)
        }).catch(err => {
            res.status(500).send({message: err.message || "Erro ocorreu ao recuperar a informação dos gestores"})
        })
    }

    
}

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'As informações para alteração não podem estar vazias'})
    }
    
    const id = req.params.id
    gestorModel.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
        if(!data){
            res.status(404).send({message: `Nao foi possível alterar o gestor com o id ${id}, 
            talvez o gestor não tenha sido encontrado!`})
        }else{
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({message: "Erro ao alterar as informações do gestor"})
    })
    
}

exports.delete = (req, res) => {
    const id = req.params.id
    gestorModel.findByIdAndDelete(id).then(data => {
        if(!data){
            res.status(404).send({message: `Não foi possível deletar o gestor com ID: ${id}, por favor verifique o ID.`})
        }else{
            res.send({
                message: "Gestor deletado com sucesso!"
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `Não foi possível deletar o gestor com ID:${id}`
        })
    })
}