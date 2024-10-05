const { signUp, logIn } = require('../Controllers/authController');
const { signUpValidation, loginValidation } = require('../Middlewares/authValidation');

const router = require('express').Router();

router.post('/hospitalogin',loginValidation,logIn)

router.post('/hospitalregistration',signUpValidation,signUp)

module.exports = router;