const app = require('express')()

const path = require('path')

const {adminRoutes} = require('./admin')
const shopRoutes = require('./shop')

app.use('/admin' , adminRoutes)
app.use(shopRoutes)

app.use((req , res , next) => {
    res.render('404')
    // res.sendFile(path.join(__dirname , '../' , 'views' , '404.html'))
})

module.exports = app