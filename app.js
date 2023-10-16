const http = require('http');

const express = require('express');

const app = express()

app.use((req,res,next)=>{
    console.log("inside first middleware")
    next();
})

app.use((req,res,next)=>{
    console.log("inside last middleware")
    res.send('<h1>Hello from Express</h1>')
})
app.listen(3000);