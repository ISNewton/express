
const express = require('express')
const app = express()

const path = require('path')

const bodyParser = require('body-parser')

const routes = require('./routes/index')


app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    next()
})


app.use(routes)



app.listen(3000)