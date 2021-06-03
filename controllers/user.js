const userService = require('../services/user.service')

module.exports = {
  createUser,
  updateUser,
  getUser,
  deleteUser,
  getArticlesByUser
}

async function createUser(req, res, next) {
  try {
      const userId = req.params.userId
      const data = req.body
      const result = await userService.createUser(data, userId)
      res.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

async function getUser(req, res, next) {
  try {
      const userId = req.params.userId
      const result = await userService.getUser(userId)
      res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}

async function updateUser(req, res, next) {
  try {
      const userId = req.params.userId
      const data = req.body
      const result = await userService.updateUser(userId, data)
      res.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

async function deleteUser(req, res, next) {
  try {
      const userId = req.params.userId
      const data = req.body
      const result = await userService.deleteUser(userId, data)
      res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}

async function getArticlesByUser(req, res, next) {
  try {
      const userId = req.params.userId
      const result = await userService.getArticlesByUser(userId)
      res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}