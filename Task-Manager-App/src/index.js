const express = require("express")
require("../src/db/mangoose")
const User = require("../src/models/user")


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post("/user", (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
    }).catch(() => {

    })
})

app.listen(port, () => {
    console.log('Server is up on port' + port);
})