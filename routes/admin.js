const app = require('express')

const router = app.Router()

router.get('/products',(req , res , next) => {
    res.send('<h1>Here is the index of products</h1>')
})

router.get('/add-product',(req , res , next) => {
    res.send('<h1>add product page</h1>')
})

module.exports = router
