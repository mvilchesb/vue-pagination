const { Schema, model } = require('mongoose')

const articleSchema = new Schema({
    title: String,
    imageURL: String,
    description: String
})

module.exports = model('Article', articleSchema)
