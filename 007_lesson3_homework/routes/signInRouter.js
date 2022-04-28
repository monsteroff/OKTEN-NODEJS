const {Router} = require("express");
const signInController = require("../controllers/signInController");
const signInMiddleware = require("../middleware/signInMiddleware");

const signInRouter = Router();

signInRouter.get("/", signInController.renderSignInPage);
signInRouter.post("/", signInMiddleware, signInController.checkAndRedirect);

module.exports = signInRouter;