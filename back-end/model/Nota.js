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
        required:true
    },
    data: {
        type: Date
    },
    valor: {
        type: Number,
        required: true,
        default: 129.90,    // Valor assumido se não for informado
        min: 79.90
    }
});

module.exports = mongoose.model('Nota', esquema, 'notas')
