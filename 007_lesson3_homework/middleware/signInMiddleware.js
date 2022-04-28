function isUserValid(req, res, next) {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            throw new Error("Email or Password is not provided!")
        }

        if (password.length < 6) {
            throw new Error("Not Valid Password")
        }

        next()
    } catch (err) {
        console.log(err.message)
        res.status(400).send(err.message)
    }
}

module.exports = isUserValid;