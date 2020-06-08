const express = require("express")
require("./db/db_connect_mangoose")
const User = require("../src/models/user")
const Task = require("../src/models/task")


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post("/users", async(req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
})

app.patch("/users/:id", async(req, res) => {
    const userdata = Object.keys(req.body)
    const allowdata = ["name", "email", "password", "age"]
    const isValidData = userdata.every((data) => allowdata.includes(data))
    if (!isValidData) {
        return res.status(400).send({ error: "invalid Input" })
    }
    try {
        const userUpdate = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!userUpdate) {
            return res.status(404).send("No user found")
        }
        res.send(userUpdate)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.get("/users", async(req, res) => {

    try {
        const user = await User.find({})
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(e)
    }

    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch(() => {
    //     res.status(500).send()
    // })
})

app.get("/users/:id", async(req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send("User not found")
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.post("/tasks", async(req, res) => {
    const task = new Task(req.body)
    try {
        task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(500).send(e)
    }
    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((error) => {
    //     res.status(500).send(error)
    // })
})

app.patch("/tasks/:id", async(req, res) => {
    const taskdata = Object.keys(req.body)
    const allowdata = ["description", "completion"]
    const isValidData = taskdata.every((data) => allowdata.includes(data))
    if (!isValidData) {
        return res.status(400).send({ error: "invalid input" })
    }
    try {
        const taskupdate = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!taskupdate) {
            return res.status(404).send("Task not found")
        }
        res.send(taskupdate)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.get("/tasks", async(req, res) => {
    try {
        const task = await Task.find({})
        if (!task) {
            return res.status(404).send("No Task")
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
    // Task.find({}).then((tasks) => {
    //     if (!tasks) {
    //         return res.status(404).send()
    //     }
    //     res.send(tasks)
    // }).catch((er) => {
    //     res.status(500).send(er)
    // })
})

app.get("/tasks/:id", async(req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send("Not found")
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((er) => {
    //     res.status(500).send()
    // })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})