const {foods} = require("../helpers/foods")

module.exports = {
    getProducts : async () =>{
        const products = await foods
        return products
    },
    recommendProducts: async (userPreferences) => {
        try {
            const {
                highProtein,
                lowCarb,
                glutenIntolerant,
                coffeSensitive,
                lactoseIntolerant,
                vitaminCDeficiency
            } = userPreferences;
    
            let filteredProducts = foods.filter(product => {
                if (coffeSensitive && product.tags.includes('Cafeína')) return false;
                if (glutenIntolerant && product.tags.includes('Gluten')) return false;
                if (lactoseIntolerant && product.tags.includes('Lácteo')) return false;
                if (lowCarb && product.tags.includes('Alto en carbohidratos')) return false;
                return true;
            });
    
            let recommendedProducts = [];
    
            if (highProtein) {
                const highProteinProducts = filteredProducts.filter(product => product.tags.includes('Alto en proteínas'));
                if (highProteinProducts.length > 0) {
                    recommendedProducts.push(highProteinProducts[Math.floor(Math.random() * highProteinProducts.length)]);
                    filteredProducts = filteredProducts.filter(product => !highProteinProducts.includes(product));
                }
            }
    
            if (vitaminCDeficiency) {
                const vitaminCProducts = filteredProducts.filter(product => product.tags.includes('Vitamina C'));
                if (vitaminCProducts.length > 0) {
                    recommendedProducts.push(vitaminCProducts[Math.floor(Math.random() * vitaminCProducts.length)]);
                    filteredProducts = filteredProducts.filter(product => !vitaminCProducts.includes(product));
                }
            }
    
            while (recommendedProducts.length < 3 && filteredProducts.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredProducts.length);
                recommendedProducts.push(filteredProducts[randomIndex]);
                filteredProducts.splice(randomIndex, 1);
            }
    
            while (recommendedProducts.length < 3) {
                const randomIndex = Math.floor(Math.random() * foods.length);
                const randomProduct = foods[randomIndex];
                if (!recommendedProducts.includes(randomProduct)) {
                    recommendedProducts.push(randomProduct);
                }
            }
    
            const response = recommendedProducts.map(product => {
                let reason = '';
                if (product.tags.includes('Alto en proteínas')) reason += 'Alto en proteínas. ';
                if (product.tags.includes('Vitamina C')) reason += 'Rico en Vitamina C. ';
                return {
                    product,
                    reason: reason.trim() || 'Recomendacion general.'
                };
            });
    
            return response;
    
        } catch (error) {
            throw new Error("Error al generar recomendaciones de productos: " + error.message);
        }
    }

}