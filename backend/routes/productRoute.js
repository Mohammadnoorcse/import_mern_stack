
const express = require("express");
const { getProducts, getProduct } = require("../controllers/productsRoute");

const router = express.Router()


// get all product
router.get('/products',getProducts);
//get single product
router.get('/products/:id',getProduct);


module.exports = router