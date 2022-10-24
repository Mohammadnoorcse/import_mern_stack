const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')

export const getProducts =asyncHandler(async(req,res)=>{
    const products = await Product.find({})
    res.json(products)
})

export const getProduct =asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }
    else{
        res.status(404).json({message:"Product not Found"})
    }
})

