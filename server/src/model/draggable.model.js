const mongoose = require("mongoose")

const DraggableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    list: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
})  
const DraggableModel = mongoose.model("draggablelists", DraggableSchema)
module.exports = DraggableModel