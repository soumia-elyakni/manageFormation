const router = require('express').Router()
const {
    addEmploye,
    newUserFormation
} = require('../controllers/userControllers')

const {
    addOrganisme
} = require('../controllers/organismeControllers')

// require fichier outils/
const uploade = require('../outils/implode-image')
const {
    addFormation
} = require('../controllers/formationControllers')

const {tryCatch} =require('../middlewares/try-catch')


router.post('/add-employe', tryCatch(addEmploye))
router.post('/add-organisme', tryCatch(addOrganisme))
router.post('/add-formation', uploade.single('image') ,tryCatch(addFormation))
router.put('/new-userFormation/:userId', tryCatch(newUserFormation))


module.exports = router

