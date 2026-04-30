const express = require('express');

const router = express.Router()

router.post("/add-product",(req, res, next)=>{
    console.log("body : ", req.body)
    res.send(`<h1> Admin Rounter </h1>`)
})


module.exports = router
