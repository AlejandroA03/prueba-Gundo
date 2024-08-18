const productService = require("../services/productService")

module.exports={ 
    getAllProducts : async (req, res) => {
    const products= await productService.getProducts()
    res.status(200).json(products)
    },
    getRecommendations: async (req, res) => {
        try {
            const { id, preferences } = req.body;
            const recommendations = await productService.recommendProducts(preferences);
            return res.json({ id, recommended_products: recommendations });
        } catch (error) {
            return res.status(500).json({ message: "Error al obtener recomendaciones de productos", error: error.message });
        }
    }
}
