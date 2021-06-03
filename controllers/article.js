const articleService = require('../services/article.service')

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle,
  getArticleByFilters
}

async function createArticle(req, res, next) {
  try {
      const data = req.body
      const result = await articleService.createArticle(data)
      res.status(201).json(result)
  } catch (error) {
      next()
  }
}

async function updateArticle(req, res, next) {
  try {
      const articleId  = req.params.articleId
      const data = req.body
      const result = await articleService.updateArticle(articleId, data)
      res.status(201).json(result)
  } catch (error) {
      next()
  }
}

async function deleteArticle(req, res, next) {
  try {
      const articleId  = req.params.articleId
      const data = req.body
      const result = await articleService.deleteArticle(articleId, data)
      res.status(201).json(result)
  } catch (error) {
      next()
  }
}

async function getArticleByFilters(req, res, next) {
  try {
      const data = req.body
      const filter = req.query
      const result = await articleService.getArticleByFilters(data, filter)
      res.status(201).json(result)
  } catch (error) {
      next()
  }
}