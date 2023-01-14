const router = require('express').Router()
const {
    addEmploye,
    newUserFormation,
    getUserById
} = require('../controllers/userControllers')

const {
    addOrganisme
} = require('../controllers/organismeControllers')

// require fichier outils/
const uploade = require('../outils/implode-image')
const {
    addFormation
} = require('../controllers/formationControllers')

const {
        authenticate,
        checkAdmin
} = require('../middlewares/auth')

const {tryCatch} =require('../middlewares/try-catch')


router.get('/admin', authenticate, tryCatch(getUserById))
router.post('/add-employe', authenticate, checkAdmin, tryCatch(addEmploye))
router.post('/add-organisme', authenticate, checkAdmin, tryCatch(addOrganisme))
router.post('/add-formation', authenticate, checkAdmin, uploade.single('image') ,tryCatch(addFormation))
router.put('/new-userFormation/:userId', authenticate, checkAdmin, tryCatch(newUserFormation))


module.exports = router

