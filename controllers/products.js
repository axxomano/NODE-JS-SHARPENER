const rootDir = require('../util/path')
const path = require('path')
const fs = require('fs')
const Product = require('../models/product')


exports.getAddProduct = (req,res,next) =>{
    //console.log('inside add product')
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
}

exports.postAddProduct = (req,res,next)=>{
    //console.log('inside add product')
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}
exports.getProduct = (req,res,next)=>{
    //console.log(req.body)
    //res.redirect('/')
    //console.log('shop.js',adminData.products)
    Product.fetchAll((products)=>{
        console.log('products',products)
    //res.end();
    fs.readFile(path.join(rootDir, 'views', 'shop.html'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error loading shop.html');
        }
        const productHtml = products.map(product => `<li>${product.title}</li>`).join('');
        console.log('productHtml',productHtml)
        const updatedHTML = data.replace('<div id="products"></div>', `<div id="products">${productHtml}</div>`);

        res.send(updatedHTML);
    })
    
    });
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'))
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


