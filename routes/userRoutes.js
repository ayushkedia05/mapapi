const express = require('express');
const userController = require('./../controllers/userController');
const Authcontroller = require('../controllers/Authcontroller.js');
const { signup } = require('../controllers/Authcontroller.js');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', Authcontroller.login);


router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
