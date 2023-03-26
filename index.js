const http = require('http')

const app = require('express')()

const bodyParser = require('body-parser')

const routes = require('./routes/index')

app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
    next()
})


app.use(routes)



app.listen(3000)