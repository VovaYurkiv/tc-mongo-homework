const UserModel = require('../models/user')
const ArticleModel = require('../models/article')

module.exports = {
    createUser,
    updateUser,
    getUser,
    deleteUser,
    getArticlesByUser
}

async function createUser(data, userId) {
    const existingUser = await UserModel.findOne({title: data.title})
    if (existingUser) {
        console.log('User already exists!')
    }
        const newUser = new UserModel(data)
        return newUser.save()
}

async function getUser(userId) {
    const user = await UserModel
        .findById(userId)
        .populate('articles', 'title description category')
    if (!user) {
        console.log('User does not exist!')
    } else {
        return user
    }
}

async function updateUser(userId, data) {
    const existingUser = await UserModel.findById(userId)
    if (!existingUser) {
        console.log('Cannot find user!')
    } else {
        Object.assign(existingUser, data)
        return await existingUser.save()
    }
}

async function deleteUser(userId) {
    const existingUser = await UserModel.findById(userId)
    if (!existingUser) {
        console.log('Cannot find user!')
    } else {
        await UserModel.deleteOne({_id: userId})
        await ArticleModel.remove( { owner: userId })
    }
}

async function getArticlesByUser(userId) {
    const article = await UserModel
        .findById(userId)
        .populate('articles', 'title description category')
    if (!article) {
        console.log('User does not exist!')
    } else {
        return article
    }
}