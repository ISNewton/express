
const express = require('express');

const adminController = require('../controllers/admin');
const cartController = require('../controllers/cart');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

router.get('/products/:id/edit', adminController.editProduct);
router.put('/products/:id', adminController.updateProduct);


// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.delete('/products/:id', adminController.deleteProduct);


router.post('/cart/:id',cartController.addProduct)


module.exports = router;
