const mongoose = require('mongoose');
const SeedSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        required:[true, 'Este dato es requerido'] 
    },
    semilla: { 
        type: String,
        required:[true, 'Este dato es requerido'] 
    },
    cantidad: { 
        type: Number,
        required:[true, 'Este dato es requerido'] 
    },
    stockcritico: { 
        type: Number,
        required:[true, 'Este dato es requerido'] 
    },
    descripcion: {
        type: String,
        required:[true, 'Este dato es requerido'] 
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
    }
});
module.exports.Seed = mongoose.model('Seed', SeedSchema);