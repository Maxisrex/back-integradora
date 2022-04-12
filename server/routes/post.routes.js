const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post.controller');

router.post('/createPost', postCtrl.createPost);

router.get('/getPost', postCtrl.getPost);



module.exports = router;