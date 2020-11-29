const mongoose = require('mongoose')

const esquema = mongoose.Schema({

    nro_duplicata: {
        type: String,
        required: true
    },
    valor_duplicata: {
        type: Number,
        required: true
    },
    
    nota: {
        type: mongoose.ObjectId,
        ref: 'Nota',
        required: true
    },
    usuario: {
        type: mongoose.ObjectId,
        ref: 'Usuario',
        required: true
    },
    tipo_duplicata: {
        type: String,
        enum: ['Pagamento', 'Recebimento']
    },

    data_vencimento: {
        type: Date,
    }

});

module.exports = mongoose.model('Faturamento', esquema, 'faturamentos')