const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    tName: { type: String, required: true },
   // role: { type : String, required: true },
    tLastName:{type:String,required:true},
    nAge:{type:Number,},
    tNickName:{type:String,required:true},
    tEmail:{type:String,required:true},
    tPassword: { type : String, required: true },
    tImage:{type:String}
});

module.exports = mongoose.model('Users', UserSchema);