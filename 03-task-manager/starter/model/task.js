const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true,
        maxlength : [20, "Characters must not exceed 20"],
    },
    completed:{
        type: Boolean,
        default: false
    } 
})

module.exports = mongoose.model('Task', TaskSchema);