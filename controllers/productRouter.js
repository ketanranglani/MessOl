const productRouter= require('express').Router()
const axios=require('axios')
require('dotenv').config
const apiKey=process.env.API_Key
const Token= process.env.Token
productRouter.get('/',async(req,res)=>{
    const config={
        method : 'GET',
        headers:{
            'X-Shopify-Access-Token':Token,
            'Authorization': `Basic ${Buffer.from(apiKey + ":" + Token).toString('base64')}`,
            'Content-Type': 'application/json'
        }
    }
    try{
        res= await fetch(`https://storeName.myshopify.com/admin/api/2023-07/shop.json`,config)
        const shopDetails = await res.json();
        res.json(shopDetails.shop);
    }catch(error){
        console.log(error)
    }
})
module.exports=productRouter