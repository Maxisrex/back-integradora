const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    tName: { type: String, required: true },
   // role: { type : String, required: true },
    tLastName:{type:String,required:true},
    tLastName2:{type:String,rquired:true},
    tEmail:{type:String,required:true},
    tPassword: { type : String, required: true },
});

module.exports = mongoose.model('Users', UserSchema);