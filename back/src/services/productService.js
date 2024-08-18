const {foods} = require("../helpers/foods")

module.exports = {
    getProducts : async () =>{
        const products = await foods
        return products
    } 
}