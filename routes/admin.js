const app = require('express')

const path = require('path')

const router = app.Router()

const products = []


router.get('/products',(req , res , next) => {
    res.render('admin/products' , {
        products: products,
        path: '/admin/products'
    })
    // res.sendFile(path.join(__dirname , '../' , 'views' , 'admin' , 'products.html'))
})

router.get('/add-product',(req , res , next) => {
    res.render('admin/add-product',{
        path: '/admin/add-product'

    })
    // res.sendFile(path.join(__dirname , '../' , 'views' , 'admin' , 'add-product.html'))
})
router.post('/add-product',(req , res , next) => {
    products.push(req.body.name)
    res.redirect('/admin/products')
})

exports.adminRoutes = router
exports.products = products
