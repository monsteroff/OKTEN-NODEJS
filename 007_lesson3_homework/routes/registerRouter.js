const {Router} = require("express");
const registerMiddleware = require("../middleware/registerMiddleware");
const registerController = require("../controllers/registerController");

const registerRouter = Router();

registerRouter.get("/", registerController.renderRegisterPage);
registerRouter.post("/", registerMiddleware, registerController.checkAndRedirect);

module.exports = registerRouter;
