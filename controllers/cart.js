const Cart = require('../models/cart')
exports.addProduct = (req, res, next) => {

    Cart.add(req.params.id)

    res.redirect('/')

}