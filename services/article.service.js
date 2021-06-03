const ArticleModel = require('../models/article')
const UserModel = require('../models/user')

module.exports = {
    createArticle,
    updateArticle,
    deleteArticle,
    getArticleByFilters
}

async function createArticle(data) {
    const existingUser = await UserModel.findOne({_id: data.owner})
    if (!existingUser) {
        console.log('User does not exist!')
    } else {
        const existingArticle = await ArticleModel.findOne({title: data.title})
        if (existingArticle) {
            console.log('Article already exists!')
        } else {
            const newArticle = await ArticleModel.create(data)
            existingUser.articles.push(newArticle._id)
            existingUser.numberOfArticles++
            await existingUser.save()
            return newArticle
        }
    }
} 

async function updateArticle(articleId, data) {
    const existingArticle = await ArticleModel.findById(articleId)
    const existingUser = await UserModel.findOne({_id: data.owner})
        if (!existingArticle) {
            console.log('There is no article with this id!')
        } else if (!existingUser) {
            console.log('User does not exist!')
        } else {
            Object.assign(existingArticle, data)
            return await existingArticle.save()
        }
}

async function deleteArticle(articleId, data) {
    const existingUser = await UserModel.findOne({_id: data.owner})
    const existingArticle = await ArticleModel.findById(articleId)
    const userArticles = existingUser.articles
    const articleIndex = userArticles.findIndex(el => el === articleId)
    if (!existingArticle) {
        console.log('Cannot find article!')
    } else {
        await ArticleModel.deleteOne({_id: articleId})
        existingUser.numberOfArticles--
        userArticles.splice(articleIndex, 1)
        await existingUser.save()
    }
}

async function getArticleByFilters(data, filter) {
    const existingArticle = await ArticleModel.findOne({title: data.title})
    if (!existingArticle) {
        console.log('Cannot find article!')
    } else {
        return await ArticleModel.find(filter)
    }    
}