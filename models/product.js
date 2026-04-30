const fs = require('fs')
const path = require('path')

const productDbFilePath = path.join(__dirname, "../dp/products.json")

module.exports = class Product {
    constructor(
        name,
        price,
    ) {
        this.name = name
        this.price = price
    }

    //Method to save the product item in the database (FILE)
    async save(){
        return new Promise((resolve, reject) => {
            // UTF8 used to read data from file in JSON formate (need to be parsed to work with it)
        fs.readFile(productDbFilePath,"utf8", (err, data) => {
            if(err){
                reject(err)
                return
            }
            //parse db
            const productsData = JSON.parse(data)
            //push new data into db
            productsData.push({
                id: productsData.length+1,
                name : this.name,
                price: this.price
            })

            //write the data to the db file
            fs.writeFile(productDbFilePath, JSON.stringify(productsData), "utf8", (err)=>{
                if(err){
                    reject(err)
                    return
                }
                resolve("Product saved successfully")
            })
        })
        })
    }

    //Method to get the products data from db (FILE)
    //Static method => mean the method belong to the class inself not the instance
    static getData(){
        const data = fs.readFileSync(productDbFilePath, "utf8")
        return JSON.parse(data)
    }

    static async deleteById(id){
        return new Promise((resolve, reject) => {
            //get data from db FILE
            fs.readFile(productDbFilePath, 'utf-8', (err, data) => {
                if(err){
                    reject(err.message)
                    return
                }
                const productData = JSON.parse(data)
                const filteredData = productData.filter(item => item.id !== id)

                //Update data in db FILE
                fs.writeFile(productDbFilePath, JSON.stringify(filteredData), 'utf-8', err => {
                    if(err){
                        reject(err.message)
                        return
                    }
                    resolve({ message: "Product deleted successfully" })
                })
            })
        })
    }
}