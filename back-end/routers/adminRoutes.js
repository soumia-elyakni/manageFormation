const router = require('express').Router()
const {
    addEmploye
} = require('../controllers/userControllers')
const {tryCatch} =require('../middlewares/try-catch')


router.post('/add-employe', tryCatch(addEmploye))

module.exports = router

