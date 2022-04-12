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
        nAge: req.body.nAge,
        tNickName:req.body.tNickName,
        tEmail:req.body.tEmail,
        tPassword:req.body.tPassword,
        tImage:req.body.tImage
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

userCtrl.editEmployee = async (req,res) => {
    const { id } = req.params;
    const newUsr = {
        name : req.body.name,
        role : req.body.role,
        password : req.body.password,
        user: req.body.user
    }
    //(id, objeto nuevo, si no existe, crealo)
    await user.findByIdAndUpdate(id, {$set: newUsr}, {new:true});
    res.json({
        status: 'Employee update'
    });
};

userCtrl.deleteEmployee = async (req,res) => {
    await user.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Employee deleted'
    });
};

module.exports = userCtrl;