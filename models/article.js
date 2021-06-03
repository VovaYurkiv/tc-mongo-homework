const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ArticleSchema = new Schema({
    title: { type: String, minlength: 5, maxlength: 400, index: true, required: true },
    subtitle: { type: String, minlength: 5 },
    description: { type: String, minlength: 5, maxlength: 5000, required: true },
    owner: { type: ObjectId, ref: 'User', required: true },
    category: { type: String, enum: ['sport', 'games', 'history'], required: true }
}, {
    timestamps: true
})

module.exports = mongoose.model('Article', ArticleSchema)