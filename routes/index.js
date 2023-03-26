const app = require('express')()

const adminRoutes = require('./admin')
const shopRoutes = require('./shop')

app.use(adminRoutes)
app.use(shopRoutes)

module.exports = app