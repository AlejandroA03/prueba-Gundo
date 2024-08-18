const foods = [
    {
      name: "Pechuga de Pollo (sin piel, cocida, 100 g)",
      kcal: 165,
      prot: 31,
      carbo: 0,
      fats: 3.6,
      tags: ["Alto en proteínas"]
    },
    {
      name: "Arroz Integral (cocido, 100 g)",
      kcal: 123,
      prot: 2.7,
      carbo: 25.6,
      fats: 1,
      tags: ["Alto en carbohidratos"]
    },
    {
      name: "Queso Cheddar (100 g)",
      kcal: 402,
      prot: 25,
      carbo: 1.3,
      fats: 33,
      tags: ["Lácteo", "Alto en proteínas"]
    },
    {
      name: "Salmón (cocido, 100 g)",
      kcal: 206,
      prot: 22,
      carbo: 0,
      fats: 13,
      tags: ["Omega 3", "Alto en proteínas"]
    },
    {
      name: "Espinacas (crudas, 100 g)",
      kcal: 23,
      prot: 2.9,
      carbo: 3.6,
      fats: 0.4,
      tags: ["Fibra", "Bajo en calorías", "Vitamina C"]
    },
    {
      name: "Lentejas (cocidas, 100 g)",
      kcal: 116,
      prot: 9,
      carbo: 20,
      fats: 0.4,
      tags: ["Fibra", "Alto en proteínas"]
    },
    {
      name: "Pan Integral (100 g)",
      kcal: 247,
      prot: 13,
      carbo: 41,
      fats: 4,
      tags: ["Fibra", "Gluten"]
    },
    {
      name: "Yogur Griego (natural, sin azúcar, 100 g)",
      kcal: 59,
      prot: 10,
      carbo: 3.6,
      fats: 0.4,
      tags: ["Lácteo", "Probióticos", "Alto en proteínas"]
    },
    {
      name: "Avena (cruda, 100 g)",
      kcal: 389,
      prot: 16,
      carbo: 66,
      fats: 7,
      tags: ["Fibra", "Gluten"]
    },
    {
      name: "Almendras (100 g)",
      kcal: 576,
      prot: 21,
      carbo: 22,
      fats: 49,
      tags: ["Alto en grasas saludables"]
    },
    {
      name: "Tofu (100 g)",
      kcal: 76,
      prot: 8,
      carbo: 1.9,
      fats: 4.8,
      tags: ["Alto en proteínas", "Bajo en calorías"]
    },
    {
      name: "Quinoa (cocida, 100 g)",
      kcal: 120,
      prot: 4.1,
      carbo: 21.3,
      fats: 1.9,
      tags: ["Fibra", "Alto en proteínas"]
    },
    {
      name: "Plátano (100 g)",
      kcal: 89,
      prot: 1.1,
      carbo: 23,
      fats: 0.3,
      tags: ["Alto en carbohidratos", "Vitamina C"]
    },
    {
      name: "Pescado Azul (caballa, cocida, 100 g)",
      kcal: 262,
      prot: 19,
      carbo: 0,
      fats: 21,
      tags: ["Omega 3", "Alto en proteínas"]
    },
    {
      name: "Huevo (cocido, 100 g)",
      kcal: 155,
      prot: 13,
      carbo: 1.1,
      fats: 11,
      tags: ["Alto en proteínas"]
    },
    {
      name: "Lechuga (100 g)",
      kcal: 15,
      prot: 1.4,
      carbo: 2.9,
      fats: 0.2,
      tags: ["Fibra", "Vitamina C"]
    },
    {
      name: "Chía (100 g)",
      kcal: 486,
      prot: 16.5,
      carbo: 42,
      fats: 31,
      tags: ["Fibra", "Omega 3"]
    },
    {
      name: "Mantequilla de Maní (natural, 100 g)",
      kcal: 588,
      prot: 25,
      carbo: 20,
      fats: 50,
      tags: ["Alto en grasas saludables", "Alto en proteínas"]
    },
    {
      name: "Garbanzos (cocidos, 100 g)",
      kcal: 164,
      prot: 8.9,
      carbo: 27,
      fats: 2.6,
      tags: ["Fibra", "Alto en proteínas"]
    },
    {
      name: "Atún enlatado (en agua, 100 g)",
      kcal: 116,
      prot: 26,
      carbo: 0,
      fats: 0.8,
      tags: ["Alto en proteínas", "Bajo en grasas"]
    },
    {
      name: "Col Rizada (100 g)",
      kcal: 35,
      prot: 2.9,
      carbo: 4.4,
      fats: 1.5,
      tags: ["Fibra", "Bajo en calorías", "Vitamina C"]
    },
    {
      name: "Aceite de Oliva (100 g)",
      kcal: 884,
      prot: 0,
      carbo: 0,
      fats: 100,
      tags: ["Alto en grasas saludables"]
    },
    {
      name: "Fresas (100 g)",
      kcal: 32,
      prot: 0.7,
      carbo: 7.7,
      fats: 0.3,
      tags: ["Bajo en calorías", "Vitamina C"]
    },
    {
      name: "Pavo (pechuga, cocida, 100 g)",
      kcal: 135,
      prot: 30,
      carbo: 0,
      fats: 1,
      tags: ["Alto en proteínas", "Bajo en grasas"]
    },
    {
      name: "Brócoli (cocido, 100 g)",
      kcal: 55,
      prot: 3.7,
      carbo: 11,
      fats: 0.6,
      tags: ["Fibra", "Bajo en calorías", "Vitamina C"]
    },
    {
      name: "Queso Cottage (bajo en grasa, 100 g)",
      kcal: 98,
      prot: 11,
      carbo: 3.4,
      fats: 4.3,
      tags: ["Lácteo", "Alto en proteínas"]
    },
    {
      name: "Acelga (cocida, 100 g)",
      kcal: 19,
      prot: 1.8,
      carbo: 3.7,
      fats: 0.2,
      tags: ["Fibra", "Bajo en calorías", "Vitamina C"]
    },
    {
      name: "Pescado Blanco (merluza, cocida, 100 g)",
      kcal: 90,
      prot: 19,
      carbo: 0,
      fats: 1.3,
      tags: ["Alto en proteínas", "Bajo en grasas"]
    },
    {
      name: "Yogur Natural (sin azúcar, 100 g)",
      kcal: 61,
      prot: 3.5,
      carbo: 4.7,
      fats: 3.3,
      tags: ["Lácteo", "Probióticos"]
    },
    {
      name: "Nuez (100 g)",
      kcal: 654,
      prot: 15,
      carbo: 14,
      fats: 65,
      tags: ["Alto en grasas saludables", "Omega 3"]
    },
    {
        name: "Café (100 ml)",
        kcal: 2,
        prot: 0.1,
        carbo: 0,
        fats: 0,
        tags: ["Cafeína", "Bajo en calorías"]
    },
    {
        name: "Té Negro (100 ml)",
        kcal: 1,
        prot: 0.1,
        carbo: 0.3,
        fats: 0,
        tags: ["Cafeína", "Bajo en calorías"]
    },
    {
        name: "Chocolate Oscuro (70-85% cacao, 100 g)",
        kcal: 598,
        prot: 7.8,
        carbo: 45.9,
        fats: 42.6,
        tags: ["Cafeína", "Gluten", "Alto en grasas saludables"]
    },
    {
        name: "Matcha (100 g)",
        kcal: 324,
        prot: 29.6,
        carbo: 44.2,
        fats: 5.3,
        tags: ["Cafeína", "Alto en proteínas"]
    },
    {
        name: "Refresco de Cola (100 ml)",
        kcal: 42,
        prot: 0,
        carbo: 10.6,
        fats: 0,
        tags: ["Cafeína", "Gluten"]
    },
    {
        name: "Jugo de Naranja (100 ml)",
        kcal: 45,
        prot: 0.7,
        carbo: 10.4,
        fats: 0.2,
        tags: ["Vitamina C"]
    },
    {
        name: "Fresas (100 g)",
        kcal: 32,
        prot: 0.7,
        carbo: 7.7,
        fats: 0.3,
        tags: ["Vitamina C", "Bajo en calorías"]
    },
    {
        name: "Kiwi (100 g)",
        kcal: 61,
        prot: 1.1,
        carbo: 14.7,
        fats: 0.5,
        tags: ["Vitamina C"]
    },
    {
        name: "Pimientos Rojos (crudos, 100 g)",
        kcal: 31,
        prot: 1,
        carbo: 6,
        fats: 0.3,
        tags: ["Vitamina C", "Bajo en calorías"]
    },
    {
        name: "Mandarinas (100 g)",
        kcal: 53,
        prot: 0.8,
        carbo: 13,
        fats: 0.3,
        tags: ["Vitamina C"]
    },
    {
        name: "Cereales de Trigo (100 g)",
        kcal: 364,
        prot: 9.8,
        carbo: 76.6,
        fats: 2.3,
        tags: ["Gluten", "Fibra"]
    },
    {
        name: "Cerveza (100 ml)",
        kcal: 43,
        prot: 0.5,
        carbo: 3.6,
        fats: 0,
        tags: ["Gluten", "Cafeína"]
    },
    {
        name: "Pan Blanco (100 g)",
        kcal: 266,
        prot: 8.9,
        carbo: 49,
        fats: 3.3,
        tags: ["Gluten"]
    },
    {
        name: "Galletas (100 g)",
        kcal: 502,
        prot: 6.5,
        carbo: 66.6,
        fats: 24.6,
        tags: ["Gluten", "Alto en grasas"]
    },
    {
        name: "Harina de Trigo (100 g)",
        kcal: 364,
        prot: 10.3,
        carbo: 76.3,
        fats: 1,
        tags: ["Gluten"]
    },
    {
        name: "Cebada (100 g)",
        kcal: 354,
        prot: 12.5,
        carbo: 73.5,
        fats: 2.3,
        tags: ["Gluten", "Fibra"]
    },
    {
        name: "Mango (100 g)",
        kcal: 60,
        prot: 0.8,
        carbo: 15,
        fats: 0.4,
        tags: ["Vitamina C"]
    },
    {
        name: "Pomelo (100 g)",
        kcal: 42,
        prot: 0.8,
        carbo: 10.7,
        fats: 0.1,
        tags: ["Vitamina C", "Bajo en calorías"]
    },
    {
        name: "Tomate (crudo, 100 g)",
        kcal: 18,
        prot: 0.9,
        carbo: 3.9,
        fats: 0.2,
        tags: ["Vitamina C", "Bajo en calorías"]
    },
    {
        name: "Perejil (crudo, 100 g)",
        kcal: 36,
        prot: 2.9,
        carbo: 6.3,
        fats: 0.8,
        tags: ["Vitamina C", "Fibra", "Bajo en calorías"]
    }
  ];

module.exports= {foods}