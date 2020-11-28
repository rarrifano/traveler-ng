const mongoose = require('mongoose')

const esquema = mongoose.Schema({

    nro_nota: {
        type: Number,
        required: true
    },
    
    empresa: {
        type: mongoose.ObjectId,
        ref: 'Empresa',
        required: true
    },

    usuario: {
        type: mongoose.ObjectId,
        ref: 'Usuarios',
    },

    status: {
        type: String,
        enum: ['Pendente', 'Enviado']
    },

    data: {
        type: Date,
    }

});

module.exports = mongoose.model('Notas', esquema, 'notas')
