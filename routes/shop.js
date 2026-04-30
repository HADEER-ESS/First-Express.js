const express = require('express');
const { getAllProducts } = require("../controller/getAllProducts")

const router = express.Router()

router.get("/products" , getAllProducts)



module.exports = router
