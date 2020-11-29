const mongoose = require('mongoose')

const esquema = mongoose.Schema({

    nome_transportadora: {
        type: String,
        required: true
    },

    cnpj_transportadora: {
        type: String,
        required: true
    },
    telefone:{
        type: Number
    },
    email:{
        type: String
    }

});

module.exports = mongoose.model('Transportadora', esquema, 'transportadoras')