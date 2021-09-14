const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompanySchema = new Schema({
    recordId: { type: String, required: true },
    formattedName: { type: String, required: true },
    users: [],
    organization: [],
    createAt: { type: Date, required: true },
    updateAt: { type: Date, required: true }
})

module.exports = mongoose.model("company", CompanySchema)

