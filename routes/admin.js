const app = require('express')

const path = require('path')

const router = app.Router()

router.get('/products',(req , res , next) => {

    res.sendFile(path.join(__dirname , '../' , 'views' , 'admin' , 'products.html'))
})

router.get('/add-product',(req , res , next) => {
    res.sendFile(path.join(__dirname , '../' , 'views' , 'admin' , 'add-product.html'))
})

module.exports = router
