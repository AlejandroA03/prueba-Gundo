const users = [
    {
        id: 1,
        name: "Alejandro Alzate",
        username: "alejo",
        password: "prueba123",
        preferences: {
            glutenIntolerant: false,
            lowCarb: false,
            coffeSensitive: false,
            vitaminCDeficiency: false,
            lactoseIntolerant: false,
            highProtein: false
        }
    },
    {
        id: 2,
        name: "Valeria Cerquera",
        username: "valeria",
        password: "prueba123",
        preferences: {
            glutenIntolerant: true,
            lowCarb: false,
            coffeSensitive: true,
            vitaminCDeficiency: true,
            lactoseIntolerant: true,
            highProtein: false
        } 
    }
]

module.exports = { users }