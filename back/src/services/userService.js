const {users} = require("../helpers/users")
const {foods} = require("../helpers/foods")

module.exports = {
    login: async (username, password) => {
        try {
            const user = await users.find(user => user.username === username && user.password === password);

            if (!user) {
                throw new Error("Credenciales invalidas.");
            }

            return {id: user.id, name: user.name, preferences: user.preferences};
        } catch (error) {
            console.error("Error en login:", error.message);
            throw error;
        }
    },
    getRecommendations: async (userId) => {
        try {
            const user = await users.find((u) => u.id === userId);

            if (!user) {
                throw new Error("Usuario no encontrado");
            }

            const { glutenIntolerant, coffeSensitive, vitaminCDeficiency, highProtein } = user.preferences;

            const recommendations = [];

            if (vitaminCDeficiency) {
                const vitaminCFoods = foods
                    .filter((food) => food.tags.includes("Vitamina C"))
                    .slice(0, 3) 
                    .map((food) => food.name);

                recommendations.push({
                    nutrient: "Vitamin C",
                    recommended_foods: vitaminCFoods
                });
            }

            if (coffeSensitive) {
                const caffeineFoods = foods
                    .filter((food) => food.tags.includes("Cafeína"))
                    .slice(0, 3)
                    .map((food) => food.name);

                recommendations.push({
                    nutrient: "Caffeine",
                    avoid_foods: caffeineFoods
                });
            }

            if (glutenIntolerant) {
                const glutenFoods = foods
                    .filter((food) => food.tags.includes("Gluten"))
                    .slice(0, 3)
                    .map((food) => food.name);

                recommendations.push({
                    nutrient: "Gluten",
                    avoid_foods: glutenFoods
                });
            }

            if (highProtein) {
                const proteinFoods = foods
                    .filter((food) => food.tags.includes("Alto en proteínas"))
                    .slice(0, 3)
                    .map((food) => food.name);

                recommendations.push({
                    nutrient: "Protein",
                    recommended_foods: proteinFoods
                });
            }

            return {
                user_id: user.id,
                recommendations: recommendations
            };
        } catch (error) {
            throw new Error(`Error generando recomendaciones: ${error.message}`);
        }
    }
}