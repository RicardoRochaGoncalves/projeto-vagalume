const axios = require('axios')


exports.homeRoutes = (req, res) => {
    axios.all([axios.get('http://localhost:3000/api/cameras'), axios.get('http://localhost:3000/api/gestores'), axios.get('http://localhost:3000/api/estabelecimentos')])
    .then(axios.spread((...responses) => {
        const camerasdata = responses[0]
        const gestoresdata = responses[1]
        const estabelecimentosdata = responses[2]
        res.render('index', {cameras: camerasdata.data, gestores: gestoresdata.data, estabelecimentos: estabelecimentosdata.data})
    })).catch(err => {
        console.log(err)
    })
}

exports.add_camera = (req, res) => {
    res.render('add_camera')
}

exports.update_camera = (req, res) => {
    axios.get('http://localhost:3000/api/cameras', {params: {id: req.query.id }})
    .then(function(cameradata){
        res.render("update_camera", {camera: cameradata.data})
    }).catch(err => {
        res.send(err)
    })
}

exports.add_gestor = (req, res) => {
    res.render('add_gestor')
}

exports.update_gestor = (req, res) => {
    axios.get('http://localhost:3000/api/gestores', {params: {id: req.query.id}})
    .then(function(gestordata){
        res.render('update_gestor', {gestor: gestordata.data})
    }).catch(err => {
        res.send(err)
    })
}

exports.add_estabelecimento = (req, res) => {
    res.render('add_estabelecimento')
}

exports.update_estabelecimento = (req, res) => {
    axios.get('http://localhost:3000/api/estabelecimentos', {params: {id: req.query.id}})
    .then(function(estabelecimentodata){
        res.render('update_estabelecimento', {estabelecimento: estabelecimentodata.data})
        console.log(estabelecimentodata)
    }).catch(err => {
        res.send(err)
    })
}