const router = require('express').Router()
const {
    Login
} = require('../controllers/authControllers')
const {tryCatch} =require('../middlewares/try-catch')


router.post('/login', tryCatch(Login))

module.exports = router