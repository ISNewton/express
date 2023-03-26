const app = require('express')

const router = app.Router()

router.get('/',(req , res , next) => {
    res.send('<h1>Here we display all products for users</h1>')
})

module.exports = router