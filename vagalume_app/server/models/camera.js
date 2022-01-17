const mongoose = require('mongoose')

var cameraSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    datainstalacao: {
        type: String,
        required: true
    }
})

const cameraModel = mongoose.model('camera', cameraSchema)

module.exports = cameraModel