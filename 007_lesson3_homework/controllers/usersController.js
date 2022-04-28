const {users} = require("../db/users");

class UsersController {
    renderQueryFilteredOrAllUsers(req, res) {
        let filteredUsers = users;
        const obj = req.query
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                const value = obj[key];
                filteredUsers = users.filter(user => user[`${key}`].toString() === value);
            }
        }
        res.render("users", {filteredUsers});
    }

    checkUserByIdWithURL(req, res) {
        const {userId} = req.params;
        const user = users.find(u => u.id === Number(userId));
        if (user !== undefined) res.render("user", {user});
        else res.render("notFound");
    }

    deleteUserById(req, res) {
        const {userId} = req.params;
        const user = users[userId - 1];
        users.splice(users.indexOf(user), 1);
        res.redirect("/users");
    }
}

module.exports = new UsersController();