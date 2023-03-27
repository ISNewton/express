
const app = require('express')()

const path = require('path')

const bodyParser = require('body-parser')

const routes = require('./routes/index')


app.set('view engine', 'pug')
// app.set('views', 
//     path.join(__dirname, 'views'),
//     // path.join(__dirname, 'views', 'admin')
// );

app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    next()
})


app.use(routes)



app.listen(3000)