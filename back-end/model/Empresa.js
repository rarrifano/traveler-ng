const mongoose = require('mongoose')

const esquema = mongoose.Schema({

    nome_empresa: {
        type: String,
        required: true
    },

    cnpj_empresa: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Empresa', esquema, 'empresas')
