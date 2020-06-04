const express = require("express")
require("./db/db_connect_mangoose")
const User = require("../src/models/user")
const Task = require("../src/models/task")


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post("/user", (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.post("/task", (req, res) => {
    const task = new Task(req.body)
    task.status(201).save().then(() => {
        res.send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})