const express = require('express')
const morgan= require('morgan')
const productRouter= require('./controllers/productRouter')
const app=express()

app.use(express.json())
app.use(morgan('tiny'))
app.use('/api/products',productRouter)



module.exports=app