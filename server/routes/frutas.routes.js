const express = require('express');
const router = express.Router();

const frutaCtrl = require('../controllers/frutas.controller');

router.get('/getFrutas', frutaCtrl.getFrutas);

module.exports = router;