const express = require('express')
const path = require('path')
 
const productController = require('../controllers/products')
const router = express.Router();


router.get('/add-product',productController.getAddProduct)
router.post('/add-product', productController.postAddProduct)

// router.post('/product', (req,res,next)=>{
//     //console.log('inside add product')
//     //res.send('<form action="/product" method="POST"><input type="text" name="first"><input type="text" name="second"><button type="submit">ADD PRODUCT</button></form>')
//     //console.log(req.body)
//     res.redirect('/');
// })

// exports.routes = router
// exports.products = products

module.exports = router