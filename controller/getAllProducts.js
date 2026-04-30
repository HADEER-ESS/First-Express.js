const ProductModel = require("../models/product")

exports.getAllProducts = (req, res, next) => {
    // Access read data
    // the variable name is what will be shown as the key of the response data
    const products = ProductModel.getData()
    // send data to client
    res.status(200).json({ products })
}