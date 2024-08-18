const userService = require("../services/userService")

module.exports = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await userService.login(username, password);
            if (!user) {
                return res.status(401).json({ message: "Credenciales invalidas" });
            }
            return res.json({ message: "Ingreso exitoso.", user });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    },
    getRecommendations: async (req, res) => {
        try {
            const { userId } = req.params;
            const recommendations = await userService.getRecommendations(parseInt(userId));

            return res.json(recommendations);
        } catch (error) {
            return res.status(500).json({ message: "Error generando recomendaciones", error: error.message });
        }
    }
}