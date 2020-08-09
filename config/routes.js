const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const categoriesController = require('../app/controllers/categoriesController')
const notesController = require('../app/controllers/notesController')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)

router.get('/categories', categoriesController.list)
router.post('/categories', categoriesController.create)
router.get('/categories/:id', categoriesController.show)
router.put('/categories/:id', categoriesController.update)
router.delete('/categories/:id', categoriesController.destroy)

router.get('/notes', notesController.list)
router.post('/notes', notesController.create)
router.put('/notes/:id', notesController.update)
router.delete('/notes/:id', notesController.destroy)
router.get('/notes/:id', notesController.show)

module.exports = router