const express = require("express");
const controller = require("../controller/userController");
const userRoute = express.Router();

//
userRoute.get("/category",controller.getCategory);
userRoute.get("/cards",controller.getCards);

module.exports = userRoute;