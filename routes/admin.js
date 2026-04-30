const express = require('express');
// access the Model
const ProductModel = require("../models/product")
const { addProduct, deleteProduct } = require("../controller/addProduct")

const router = express.Router()

router.post("/add-product", addProduct)

router.delete("/delete-product/:id", deleteProduct)


module.exports = router
