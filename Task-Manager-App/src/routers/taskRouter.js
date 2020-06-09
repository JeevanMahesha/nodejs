const express = require("express")
const Task = require("../models/taskModel")
const router = new express.Router()


router.post("/tasks", async(req, res) => {
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

router.patch("/tasks/:id", async(req, res) => {
    const taskdata = Object.keys(req.body)
    const allowdata = ["description", "completion"]
    const isValidData = taskdata.every((data) => allowdata.includes(data))
    if (!isValidData) {
        return res.status(400).send({ error: "invalid input" })
    }
    try {
        const taskupdate = await Task.findById(req.params.id)
        taskdata.forEach(data => taskupdate[data] = req.body[data])
        await taskupdate.save()
            //const taskupdate = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!taskupdate) {
            return res.status(404).send("Task not found")
        }
        res.send(taskupdate)
    } catch (e) {
        res.status(500).send(e)
    }
})



router.delete("/tasks/:id", async(req, res) => {
    try {
        const taskdelete = await Task.findByIdAndDelete(req.params.id)
        if (!taskdelete) {
            return res.status(404).send("Task not found to delete")
        }
        res.send(taskdelete)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get("/tasks", async(req, res) => {
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

router.get("/tasks/:id", async(req, res) => {
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


module.exports = router