const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const pikminsController = require('../controllers/pikminsController')
// requiring cotrollers


// // Routes for User
router.get('/api/users', userController.index)
router.post('/api/users/', userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)



// Routes for Pikmin
router.get('/api/users/:userId/pikmins', pikminsController.index)
// show all the pikmin in a users inventory

router.get('/api/pikmins/:pikminId', pikminsController.show)
// show an individual pikmin

router.post('/api/users/:userId/pikmins', pikminsController.create)
// create a new pikmin

router.delete('/api/pikmins/:pikminId', pikminsController.delete)
// delete a pikmin from the inventory

// router.patch()
// update an exisiting pikmin

module.exports = router