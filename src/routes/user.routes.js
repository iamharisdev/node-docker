const { Hono } = require("hono");

const userController = require("../controllers/user.controller");

const userRoutes = new Hono();

userRoutes.get("/", userController.listUsers);
userRoutes.post("/", userController.createUser);
userRoutes.get("/:id", userController.getUser);
userRoutes.delete("/:id", userController.deleteUser);

module.exports = userRoutes;
