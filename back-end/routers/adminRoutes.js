const router = require('express').Router()
const {
    addEmploye
} = require('../controllers/userControllers')

const {
    addOrganisme
} = require('../controllers/organismeControllers')

const {
    addFormation
} = require('../controllers/formationControllers')

const {tryCatch} =require('../middlewares/try-catch')


router.post('/add-employe', tryCatch(addEmploye))
router.post('/add-organisme', tryCatch(addOrganisme))
router.post('/add-formation', tryCatch(addFormation))


module.exports = router

