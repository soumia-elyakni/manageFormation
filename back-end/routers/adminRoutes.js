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
router.get('/get-organismes', authenticate, checkAdmin, tryCatch(getAllOrganisme))
router.get('/get-allformations', authenticate, checkAdmin, tryCatch(getAllFormation))
router.post('/get-formations', authenticate, checkAdmin, tryCatch(getFormationByStatus))
router.get('get-employes', authenticate, checkAdmin, tryCatch(getEmployes))
router.post('/add-employe', authenticate, checkAdmin, tryCatch(addEmploye))
router.post('/add-organisme', authenticate, checkAdmin, tryCatch(addOrganisme))
router.post('/add-formation', authenticate, checkAdmin, uploade.single('image') ,tryCatch(addFormation))
router.put('/new-userFormation/:userId', authenticate, checkAdmin, tryCatch(newUserFormation))



module.exports = router

