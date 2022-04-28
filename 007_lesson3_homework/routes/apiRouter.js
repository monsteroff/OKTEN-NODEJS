const {Router} = require("express");
const usersRouter = require("./usersRouter");
const signInRouter = require("./signInRouter");
const registerRouter = require("./registerRouter");
const errorPageRouter = require("./errorPageRouter");

const routes = Router();

routes.use("/", signInRouter);
routes.use("/users", usersRouter);
routes.use("/signIn", signInRouter);
routes.use("/register", registerRouter);
routes.use("/errorPage", errorPageRouter);
routes.use((req, res) => {
    res.render("notFound");
});

module.exports = routes;