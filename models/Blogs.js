const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema( {
    title :{
        type:String,
        required:true,
        min: [6, 'Too few char'],
        max: 25
    },
    snippet :{
        type:String,
        required:true
    },
    body :{
        type:String,
        required:true
    },
}, { timestamps:true})

const Blog = mongoose.model('Blog',blogSchema)

module.exports={
    Blog
}