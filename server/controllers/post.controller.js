const post = require('../models/post');
const postCtrl = {};


postCtrl.createPost = async (req,res) => {
    const newPost = new post({
        tPost : req.body.tPost
    });
    await newPost.save();
    res.json({
       'status' : 'Post saved'
    });
    console.log(req.body);
};

postCtrl.getPost = async (req, res) => {
    const posts = await post.find();
    res.json(posts);
};







module.exports = postCtrl;