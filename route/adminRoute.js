const express = require("express");
const controller = require("../controller/adminController");

const adminRoute = express.Router();
//auth
adminRoute.use(controller.auth);
//route
adminRoute.get("/",controller.index);
adminRoute.post("/",controller.checkUser);
adminRoute.route("/category").get(controller.category)
.post(controller.addCategory).put(controller.updateCategory).delete(controller.deleteCategory);
adminRoute.route("/cards").get(controller.cards).post(controller.addCard)
.put(controller.updateCard).delete(controller.deleteCard);

module.exports = adminRoute;