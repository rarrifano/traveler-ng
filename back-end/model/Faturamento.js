const mongoose = require('mongoose')

const esquema = mongoose.Schema({

    nro_duplicata: {
        type: String,
        required: true
    },
    nota: {
        type: mongoose.ObjectId,
        ref: 'Nota'
    },
    usuario: {
        type: mongoose.ObjectId,
        ref: 'Usuario'
    },
    status: {
        type: String,
        enum: ['Pendente', 'Recebido']
    },
    data_vencimento: {
        type: Date,
    }

});

module.exports = mongoose.model('Faturamento', esquema, 'faturamentos')