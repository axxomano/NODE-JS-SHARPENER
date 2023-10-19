const rootDir = require('../util/path')
const path = require('path')


const products = []

exports.getAddProduct = (req,res,next) =>{
    //console.log('inside add product')
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
}

exports.postAddProduct = (req,res,next)=>{
    //console.log('inside add product')
    products.push({title: req.body.title})
    res.redirect('/')
}
exports.getProduct = (req,res,next)=>{
    //console.log(req.body)
    //res.redirect('/')
    //console.log('shop.js',adminData.products)
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
}

exports.homeController = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    //console.log('shop.js',adminData.products)
}


exports.successController =(req,res,next)=>{
    //console.log(req.body)
    //res.redirect('/')
    res.sendFile(path.join(rootDir, 'views', 'success.html'))
}

exports.contactUsController = (req,res,next)=>{
    //console.log(req.body)
    //res.redirect('/')
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'))
}

