const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const UserSchema = new Schema({
    firstName: { type: String, minlength: 4, maxlength: 50, required: true },
    lastName: { type: String, minlength: 3, maxlength: 60, required: true },
    role: { type: String, enum: ['admin', 'writer', 'guest'] },
    createdAt: { type: Date, default: Date.now  },
    numberOfArticles: { type: Number, default: 0 },
    articles: [
        { type: ObjectId, ref: 'Article' }
    ],
    nickname: { type: String }
})

module.exports = mongoose.model('User', UserSchema)