const app = require('express')()

const adminRoutes = require('./admin')
const shopRoutes = require('./shop')

app.use('/admin' , adminRoutes)
app.use(shopRoutes)

app.use((req , res , next) => {
    res.status(404).send('<h1>404 , Page not found</h1>')
})

module.exports = app