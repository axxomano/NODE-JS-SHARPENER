const express = require('express')
const path = require('path')


const productController = require('../controllers/products')

const router = express.Router();

//console.log(adminData)
router.get('/', productController.getProduct)

module.exports = router