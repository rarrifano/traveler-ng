const mongoose = require('mongoose')

const esquema = mongoose.Schema({

    nome_usuario: {
        type: String,
        required: true
    },

    cargo: {
        type: String,
        enum: ['Administrador', 'Operador', 'Financeiro'],
        required: true
    }

});

module.exports = mongoose.model('Usuario', esquema, 'usuarios')
