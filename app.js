const path = require('path')
const rootDir = require('./util/path')

const productController = require('./controllers/products')
const errorController = require('./controllers/error')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactusRoutes = require('./routes/contactus')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)
app.use('/contactus',contactusRoutes)

app.use(errorController.notFoundController);

app.use('/',productController.homeController);


app.listen(3000)