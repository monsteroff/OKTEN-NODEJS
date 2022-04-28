const express = require("express");
const path = require("path");
const {engine} = require("express-handlebars");
const apiRoutes = require("./routes/apiRouter");

const app = express();

// Default Setup
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "static")));

// Engine Setup
app.set("view engine", ".hbs");
app.engine(".hbs", engine({defaultLayout: ""}));
app.set("views", path.join(__dirname, "static"));

// Routes Setup
app.use(apiRoutes);

// Server Start
app.listen(5200, () => {
    console.log("Server started on PORT 5200");
});