const app = require('express')

const router = app.Router()

const homeController = require('../controllers/home')

router.get('/',homeController.index)

module.exports = router
