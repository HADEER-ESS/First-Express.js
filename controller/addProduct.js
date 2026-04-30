const { json } = require("express")
const ProductModel = require("../models/product")

exports.addProduct = async (req, res, next) => {
    // get data from request to create new PRODUCT instance
    const product = new ProductModel(req.body.name, req.body.price)

    // save the product to db
    try {
        await product.save()
    } catch (error) {
        return res.status(500).json({ message: "Error in adding new product" })
    }

    // send the response to the USER
    res.status(200).json({ message: "Product added successfully" })
}

exports.deleteProduct = async (req, res, next) => {
    const id = req.params.id
    let result
    try {
        result = await ProductModel.deleteById(+id)
    } catch (error) {
        res.status(500).json({ message : "Error in deleting the product" })
    }
    res.status(200).json( result)
}