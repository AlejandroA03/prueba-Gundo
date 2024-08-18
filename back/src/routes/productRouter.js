const { Router } = require("express");
const productsController = require("../controllers/productsController")

const productRouter = Router();

productRouter.get("/", productsController.getAllProducts)

module.exports= productRouter