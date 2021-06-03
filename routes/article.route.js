const express = require('express')
const router = express.Router()

const ArticleController = require('../controllers/article')

router.post('/', ArticleController.createArticle)
router.get('/', ArticleController.getArticleByFilters)

router.put('/:articleId', ArticleController.updateArticle)
router.delete('/:articleId', ArticleController.deleteArticle)

module.exports = router