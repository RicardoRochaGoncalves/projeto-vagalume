var cameraModel = require('../models/camera')

// criar em salvar novas cameras
exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message:'Formulário não pode estar vazio'})
        return
    }

    const camera = new cameraModel({
        ip: req.body.ip,
        user: req.body.user,
        senha: req.body.senha,
        modelo: req.body.modelo,
        datainstalacao: req.body.datainstalacao
    })

    camera.save(camera).then(data => {
        // res.send(data)
        res.redirect('/add-camera')
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Um erro ocorreu ao criar a operação"
        })
    })

}

exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id
        cameraModel.findById(id).then(data =>{
            if(!data){
                res.status(404).send({message: `Não foi encontrada a camera com ID:${id}`})
            }else{
                res.send(data)
            }
        }).catch(err => {
            res.status(500).send({message: `Erro ao tentar recuperar informações da camera com ID: ${id}`})
        })
    }else{
        cameraModel.find().then(camera => {
            res.send(camera)
        }).catch(err => {
            res.status(500).send({message: err.message || "Erro ocorreu ao recuperar a informação das cameras"})
        })
    }

    
}

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'As informações para alteração não podem estar vazias'})
    }
    
    const id = req.params.id
    cameraModel.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
        if(!data){
            res.status(404).send({message: `Nao foi possível alterar a camera com o id ${id}, 
            talvez a camera não tenha sido encontrada!`})
        }else{
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({message: "Erro ao alterar as informações da camera"})
    })

}

exports.delete = (req, res) => {
    const id = req.params.id
    cameraModel.findByIdAndDelete(id).then(data => {
        if(!data){
            res.status(404).send({message: `Não foi possível deletar a camera com ID: ${id}, por favor verifique o ID.`})
        }else{
            res.send({
                message: "Camera deletada com sucesso!"
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `Não foi possível deletar a camera com ID:${id}`
        })
    })
}