const { Router } = require("express");
const userController = require("../controllers/usersController")

const userRouter = Router();

userRouter.post("/", userController.login)
userRouter.get("/:userId", userController.getRecommendations)

module.exports= userRouter