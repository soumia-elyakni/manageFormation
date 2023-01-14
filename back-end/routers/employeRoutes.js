const router = require('express').Router()

const {authenticate} = require('../middlewares/auth')
const {tryCatch} = require('../middlewares/try-catch')
const {getFormationsByUser} = require('../controllers/formationHistoryControllers')


router.get('/get-formations', authenticate, tryCatch(getFormationsByUser))

module.exports = router