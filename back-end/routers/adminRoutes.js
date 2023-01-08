const router = require('express').Router()
const {
    addEmploye
} = require('../controllers/userControllers')
// require fichier outils/
const uploade = require('../outils/implode-image')
const {
    addOrganisme
} = require('../controllers/organismeControllers')

const {
    addFormation
} = require('../controllers/formationControllers')

const {tryCatch} =require('../middlewares/try-catch')


router.post('/add-employe', tryCatch(addEmploye))
router.post('/add-organisme', tryCatch(addOrganisme))
router.post('/add-formation', uploade.single('image') ,tryCatch(addFormation))


module.exports = router

