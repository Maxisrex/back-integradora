const fruta = require('../models/frutas');
const frutaCtrl = {};


frutaCtrl.getFrutas = async (req, res) => {
    const frutasList = await fruta.find();
    res.json(frutasList);
};
module.exports = frutaCtrl;