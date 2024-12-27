const express = require('express');
const router = express.Router();
const {body} = require('express-validator');

const userController = require('../controllers/user.controllers');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid-Email'),
    body('fullname.firstname').isLength({min:3}).withMessage("First name should be minimun 3 characters long"),
    body('password').isLength({min:3}).withMessage("password should be at least 6 characters long"),
],
userController.registerUser
)

module.exports = router;