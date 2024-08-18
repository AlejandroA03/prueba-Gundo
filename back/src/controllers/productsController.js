const productService = require("../services/productService")

module.exports={ 
    getAllProducts : async (req, res) => {
    const products= await productService.getProducts()
    res.status(200).json(products)
}}
