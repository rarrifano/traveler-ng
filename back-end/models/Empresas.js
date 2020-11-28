const mongoose = require('mongoose')

const esquema = mongoose.Schema({

    razao_social: {
        type: String,
        required: true
    },

    cnpj: {
        type: String
    }

});

module.exports = mongoose.model('Empresas', esquema, 'empresas')
