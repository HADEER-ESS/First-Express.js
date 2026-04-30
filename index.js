const express = require('express');
const app = express();

app.use(express.json()) // handle json data in request body
app.use(express.urlencoded({extended: true})) // handle form data in request body

app.get("/", (req, res, next) => {
    res.send(`<h1> Hello from root route (/) </h1>`)
})

app.post("/add-product",(req, res, next)=>{
    console.log("body : ", req.body)
    res.send(`<h1> Hello from first route for /add product </h1>`)
})

app.get("/product" ,(req, res, next)=>{
    res.send(`<h1> Hello from second app route for getting products data /product </h1>`)
})

app.listen(3001, ()=> console.log("Server is running on port 3001"));