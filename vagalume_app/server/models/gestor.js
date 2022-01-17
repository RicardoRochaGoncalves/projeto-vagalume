const mongoose = require('mongoose')
const estabelecimentoModel = require('./estabelecimento')

var gestorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const gestorModel = mongoose.model('gestor', gestorSchema)

module.exports = gestorModel