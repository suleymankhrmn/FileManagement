const mongoose = require('mongoose');
const role = require('./role');
const {Schema} = mongoose;

const userSchema = new Schema({
    name:{ type: String, required: true, minlenght: 2 },
    surname:{ type: String, required: true, minlenght: 2 },
    username:{ type: String, required: true, minlenght: 2, unique:true },
    password:{ type: String, required: true, minlenght: 6 },
    createAt:{type: Date, required: true},
    updateAt:{type: Date, required: true},
    createByUsername:{type:String, required:true},
    companyId:{type:String, required:true},
    organizationId:{type:String, required:true},
    sectionId:{type:String, required:true},
    roleId:{type:String, required:true}
})

module.exports = mongoose.model("user",userSchema);