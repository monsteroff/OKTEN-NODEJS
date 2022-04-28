const {Router} = require("express");

const usersController = require("../controllers/usersController");

const usersRouter = Router();

usersRouter.get("/", usersController.renderQueryFilteredOrAllUsers);
usersRouter.get("/:userId", usersController.checkUserByIdWithURL);
usersRouter.post("/:userId", usersController.deleteUserById);

module.exports = usersRouter;