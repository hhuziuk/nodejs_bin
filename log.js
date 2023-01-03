const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
})
// {timestamps: true} треба, якщо ми працюємо не з готовою бд, а робимо її в аплікусі

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact