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
        ref: 'Usuario',
        required: true
    },
    transportadora:{
        type: mongoose.ObjectId,
        ref: 'Transportadora',
        required: true
    },

    status: {
        type: String,
        enum: ['Pendente', 'Enviado']
    },

    data: {
        type: Date
    }

});

module.exports = mongoose.model('Nota', esquema, 'notas')
