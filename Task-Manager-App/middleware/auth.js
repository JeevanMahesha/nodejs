const User = require("../src/models/userModel")
const jwt = require("jsonwebtoken")

const auth = async(req, res, next) => {
    try {
        const token = req.header('Authorization')
        const decode = jwt.verify(token, 'TaskManagerApp')
        const user = await User.findOne({ _id: decode._id, "tokens.token": token })
        if (!user) {
            throw new Error()
        }
        req.user = user
        next()
    } catch (e) {
        res.status(401).send(e)
    }
}

module.exports = auth