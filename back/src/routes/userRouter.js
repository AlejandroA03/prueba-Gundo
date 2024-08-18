const { Router } = require("express");
const userController = require("../controllers/usersController")

const userRouter = Router();

userRouter.post("/", userController.login)
userRouter.get("/:id", userController.getRecommendations)

module.exports= userRouter