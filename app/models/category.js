const mongoose = require('mongoose')

//create schema
const Schema = mongoose.Schema
const categorySchema = new Schema({
    name: {
        type: String,
        required: true 
    }
})

//create model
const Category = mongoose.model('Category', categorySchema) 

module.exports = Category 