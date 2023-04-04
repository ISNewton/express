const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
var methodOverride = require('method-override')
const sequelize = require('./util/database')
const errorController = require('./controllers/error');

const app = express();


app.use(methodOverride('_method'))

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(authRoutes);
app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(errorController.get404);

sequelize.sync()
.then(result => app.listen(3000))
