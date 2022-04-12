const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.controller');

router.get('/getUser', userCtrl.getUsers);

router.post('/createUser',userCtrl.createUser);

router.post('/updateUser',userCtrl.createUser);

router.post('/logginUser',userCtrl.logginUser);



module.exports = router;