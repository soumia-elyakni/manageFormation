const router = require('express').Router()
const {authenticate} = require('../middlewares/auth')
const {
    Login,
    Logout
} = require('../controllers/authControllers')
const {tryCatch} =require('../middlewares/try-catch')


router.post('/login', tryCatch(Login))
router.delete('/logout', authenticate ,tryCatch(Logout))

module.exports = router