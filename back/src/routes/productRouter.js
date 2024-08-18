const { Router } = require("express");
const productsController = require("../controllers/productsController")

const productRouter = Router();

productRouter.get("/", productsController.getAllProducts)
productRouter.post('/recommend-products', productsController.getRecommendations);

module.exports= productRouter