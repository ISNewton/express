const app = require('express')

const path = require('path')

const router = app.Router()

const productsController = require('../controllers/products')

router.get('/products',productsController.index)

router.get('/add-product',productsController.create)
router.post('/add-product',productsController.store)

exports.adminRoutes = router
