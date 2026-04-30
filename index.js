const express = require('express');
const app = express();
const adminRounter = require("./routes/admin")
const shopRounter = require("./routes/shop")


app.use(express.json()) // handle json data in request body
app.use(express.urlencoded({extended: true})) // handle form data in request body

app.get("/", (req, res, next) => {
    res.send(`<h1> Hello from root route (/) </h1>`)
})

app.use("/admin",adminRounter)
app.use("/shop",shopRounter)

app.listen(3001, ()=> console.log("Server is running on port 3001"));