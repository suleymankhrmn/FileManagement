const mongoose = require('mongoose');
const {Schema} = mongoose;

const roleSchema = new Schema({
    name:{type:String},  
})

module.exports = mongoose.model('role', roleSchema);
