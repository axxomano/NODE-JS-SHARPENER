const fs = require('fs')
const rootDir = require('../util/path')
const path = require('path');
//const { stringify } = require('querystring');
const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');


const getProductsFromfile = (cb) => {

    let pr = []
    fs.readFile(p,(err,fileContent)=>{
        if(err)
           return cb([])
        else
            return cb(JSON.parse(fileContent))
    })
}

module.exports = class Product {
    constructor(t){
        this.title = t
    }
    save(){
        getProductsFromfile((products)=>{
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err)
            })
        })
    }
    static fetchAll(cb){
        getProductsFromfile(cb)
    }
}