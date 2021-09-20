const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bioSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    itemType: {
        type: String,
        required: true
    },
    description: String,
    age: {
        type: String,
    },
    imgURL: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Bio", bioSchema)