const mongoose = require('mongoose')

var estabelecimentoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: false
    }
})

const estabelecimentoModel = mongoose.model('estabelecimento', estabelecimentoSchema)

module.exports = estabelecimentoModel