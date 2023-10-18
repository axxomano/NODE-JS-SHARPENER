const express = require('express')
const path = require('path')

const rootDir = require('../util/path')
const router = express.Router();

router.get('/add-product', (req,res,next)=>{
    //console.log('inside add product')
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/product', (req,res,next)=>{
    //console.log('inside add product')
    //res.send('<form action="/product" method="POST"><input type="text" name="first"><input type="text" name="second"><button type="submit">ADD PRODUCT</button></form>')
    console.log(req.body)
    res.redirect('/');
})

module.exports = router