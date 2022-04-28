const express = require("express");
const path = require("path")
const { engine } = require("express-handlebars");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "static")));
app.set("view engine", ".hbs");
app.engine(".hbs", engine({defaultLayout: ""}));
app.set("views", path.join(__dirname, "static"));

const users = [
    {
        id:1,
        firstName : "Cahangir",
        lastName : "Qanizade",
        email : "cahangir.qanizade@gmail.com",
        password : "c4h4ng1r",
        age : 27,
        city : "Baku"
    },
    {
        id:2,
        firstName : "Orxan",
        lastName : "Heyderli",
        email : "orxanz0r@gmail.com",
        password : "0rx4n",
        age : 28,
        city : "Baku"
    },
    {
        id:3,
        firstName : "Eldar",
        lastName : "Bagirov",
        email : "eldarinho@gmail.com",
        password : "3ld4r",
        age : 28,
        city : "Baku"
    },
    {
        id:4,
        firstName : "Andriy",
        lastName : "Beyzyk",
        email : "andre@gmail.com",
        password : "4ndr1y",
        age : 52,
        city : "Lviv"
    },
    {
        id:5,
        firstName : "Leo",
        lastName : "Pan",
        email : "leo.pan@gmail.com",
        password : "l30p4n",
        age : 99,
        city : "Lviv"
    },
    {
        id:6,
        firstName : "Yusif",
        lastName : "Jafarov",
        email : "yusifjeff@gmail.com",
        password : "yu51fj3ff",
        age : 39,
        city : "Berlin"
    }
];

let lastId = users.length;

app.get('/',(req,res) =>{
    res.redirect("/signIn")
})

app.get("/register", (req,res) => {
    res.render("register");
});

app.post("/register",(req, res) => {
    let whereToGo = "/users"
    for (let i = 0 ; i < users.length ; i++){
        if(users[i].email === req.body.email){
            whereToGo = "/errorPage";
            break;
        }
    }
    if (whereToGo === "/users"){
        const newUser = req.body;
        newUser.id = ++lastId;
        users.push(newUser);
    }
    res.redirect(whereToGo);
});

app.get("/signIn", (req,res) => {
    res.render("signIn");
});

app.post("/signIn", (req,res) => {
    const nomerZakluchennoqo = users.findIndex(u => u.email === req.body.email && u.password === req.body.password);
    if (nomerZakluchennoqo === -1) res.redirect("/users");
    else res.redirect(`/users/${users[nomerZakluchennoqo].id}`);
});

app.get("/users", (req,res) => {
    let filteredUsers = users
    const obj = req.query
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            filteredUsers = users.filter(user => user[`${key}`].toString() === value)
        }
    }
    res.render("users", {filteredUsers});
});

app.get("/users/:userId", (req,res) => {
    const { userId } = req.params;
    const user = users.find(u => u.id === Number(userId));
    if(user !== undefined) res.render("user", {user});
    else res.render("notFound");
});

app.post("/users/:userId", (req,res) => {
    const { userId } = req.params;
    const user = users[userId-1];
    users.splice(users.indexOf(user),1);
    res.redirect("/users");
});

app.get("/errorPage" , (req,res) => {
    res.render("errorPage");
});

app.use((req,res) => {
    res.render("notFound");
});

app.listen(5200, () => {
    console.log("Server started on PORT 5200");
});