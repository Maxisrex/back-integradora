const mongoose = require('mongoose');
const { Schema } = mongoose;

const FrutaSchema = new Schema({
    tNombre: { type: String, required: true },
    nPrecio: { type : Number },
    nStock: { type : Number }

});

module.exports = mongoose.model('Frutas', FrutaSchema,'frutas');