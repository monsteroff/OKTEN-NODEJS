const {users} = require("../db/users");

class SignInController {
    renderSignInPage(req, res) {
        res.render("signIn");
    };

    checkAndRedirect(req, res) {
        const nomerZakluchennoqo = users.findIndex(u => u.email === req.body.email && u.password === req.body.password);
        if (nomerZakluchennoqo === -1) res.redirect("/users");
        else res.redirect(`/users/${users[nomerZakluchennoqo].id}`);
    };
}

module.exports = new SignInController();