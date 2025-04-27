const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    name:{
        type: String,
        required:true
    },
     files:{
        type:Number,
        default:0
     },

}, {timestamps:true})

module.exports = mongoose.model('Project', ProjectSchema)
