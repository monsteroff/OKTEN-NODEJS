const {users} = require("../db/users");

function isEmailFree(req, res, next) {
    try {
        if (users.findIndex(user => user.email === req.body.email) !== -1) {
            throw new Error("Cannot register with this email, this email already exists")
        }
        console.log("Registration success")
        res.status(200)
        next()
    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = isEmailFree;