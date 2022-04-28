const {users} = require("../db/users");
let {lastId} = require("../db/users");

class RegisterController {
    renderRegisterPage(req, res) {
        res.render("register");
    };

    checkAndRedirect(req, res) {
        // let whereToGo = "/users";
        // if (users.findIndex(user => user.email === req.body.email) !== -1) whereToGo = "/errorPage";
        // else {
        //     const newUser = req.body;
        //     newUser.id = ++lastId;
        //     users.push(newUser);
        // }
        // res.redirect(whereToGo);

        // zakommentiroval to chto naverxu tak kak v middleware mi i tak throwaem erroru (ranshe proverka bila tut)
        const newUser = req.body;
        newUser.id = ++lastId;
        users.push(newUser);
        res.redirect("/users");
    };
}

module.exports = new RegisterController();