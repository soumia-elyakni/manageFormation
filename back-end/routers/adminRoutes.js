const router = require('express').Router()
const {
    addEmploye,
    newUserFormation,
    getUserById,
    getEmployes
} = require('../controllers/userControllers')

const {
    addOrganisme,
    getAllOrganisme
} = require('../controllers/organismeControllers')

// require fichier outils/
const uploade = require('../outils/implode-image')
const {
    addFormation,
    getAllFormation,
    getFormationByStatus
} = require('../controllers/formationControllers')

const {
        authenticate,
        checkAdmin
} = require('../middlewares/auth')

const {tryCatch} =require('../middlewares/try-catch')


router.get('/get-user', authenticate, tryCatch(getUserById))
router.get('/get-organismes', tryCatch(getAllOrganisme))
router.get('/get-allformations', tryCatch(getAllFormation))
router.post('/get-formations', tryCatch(getFormationByStatus))
router.get('/get-employes', tryCatch(getEmployes))
router.post('/add-employe', tryCatch(addEmploye))
router.post('/add-organisme', tryCatch(addOrganisme))
router.post('/add-formation', uploade.single('image') ,tryCatch(addFormation))
router.put('/new-userFormation/:userId', tryCatch(newUserFormation))



module.exports = router

