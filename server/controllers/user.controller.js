const user = require('../models/users');
const userCtrl = {};


userCtrl.getUsers = async (req, res) => {
    const users = await user.find();
    res.json(users);
};

userCtrl.createUser = async (req,res) => {
    const newUsr = new user({
        tName : req.body.tName,
        tLastName:req.body.tLastName,
        tLastName2:req.body.tLastName2,
        tEmail:req.body.tEmail,
        tPhone:req.body.tPhone
    });
    await newUsr.save();
    res.json({
       'status' : 'User saved'
    });
    console.log(req.body);
};

userCtrl.logginUser = async (req,res)=>{
    user.findOne({tEmail:req.body.tEmail, tPassword:req.body.tPassword}).then(user=>{
        if(user){
            res.status(200).json(user)
        }else{
            res.status(401).json({error:'Incorrect email or password'})
        }
    }).catch(err=>{
        res.status(500).json({error:err.message})
    })
}

userCtrl.getUser = async (req,res) => {
    const find = await user.findById(req.params.id);
    res.json(find);
};





module.exports = userCtrl;