const express = require("express");
const path = require("path")
const { engine } = require("express-handlebars");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "static")));
app.set("view engine", ".hbs");
app.engine(".hbs", engine({defaultLayout: false}));
app.set("views", path.join(__dirname, "static"));


const users = [
    {
        login : "Cahangir",
        password : "Baku"
    }
]

//
// app.get("/welcome", (request, response) => {
//     // response.send("Hello from server")
//     response.json(users)
// });

app.get("/login", (req,res) => {
    res.render("login")
})

app.get("/users", (req,res) => {
    res.render("users", {users})
})

app.get("/users/:userId", (req,res) => {
    const { userId } = req.params
    res.json(users[userId-1])
    console.log(req.query)
})

app.post("/login",(req, res) => {
    // res.render(req.body)
    // console.log(req.body)
    users.push(req.body)
    res.redirect("/users")
})

app.use((req,res) => {
    res.render("notFound")
})

app.listen(5200, () => {
    console.log("Server started on PORT 5200")
});