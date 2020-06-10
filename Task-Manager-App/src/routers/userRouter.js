const express = require("express")
const User = require("../models/userModel")
const auth = require("../middleware/auth")
const router = new express.Router()


router.post("/users", async(req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e.message)
    }
    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
})

router.post("/users/login", async(req, res) => {
    try {
        const userLogin = await User.findByCredentials(req.body.email, req.body.password)
        const token = await userLogin.generateAuthToken()
        res.send({ userLogin, token })
    } catch (e) {
        res.status(400).send({ "Error": e.message })
    }
})

router.post("/users/logout", auth, async(req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send({ 'message': "logout successfully" })
    } catch (e) {
        res.status(500).send({ "message": "logout failed" })
    }
})

router.post("/users/logoutall", auth, async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send({ 'message': "logout successfully From all devices" })
    } catch (e) {
        res.status(500).send({ "message": "logout failed" })
    }
})

router.patch("/users/:id", async(req, res) => {
    const userdata = Object.keys(req.body)
    const allowdata = ["name", "email", "password", "age"]
    const isValidData = userdata.every((data) => allowdata.includes(data))
    if (!isValidData) {
        return res.status(400).send({ error: "invalid Input" })
    }
    try {
        const userUpdate = await User.findById(req.params.id)
        userdata.forEach(data => userUpdate[data] = req.body[data]);
        await userUpdate.save()
            //const userUpdate = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!userUpdate) {
            return res.status(404).send("No user found")
        }
        res.send(userUpdate)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete("/users/:id", async(req, res) => {
    try {
        const userdelete = await User.findByIdAndDelete(req.params.id)
        if (!userdelete) {
            return res.status(404).send({ "error": "user not found to delete" })
        }
        res.send({ "success": userdelete })
    } catch (e) {
        res.status(500).send("server error")
    }
})

router.get("/users/me", auth, async(req, res) => {
    res.send(req.user)
})

router.get("/users", async(req, res) => {
    //res.send(req.user)
    try {
        const user = await User.find({})
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(e)
    }

    User.find({}).then((users) => {
        res.send(users)
    }).catch(() => {
        res.status(500).send()
    })
})

router.get("/users/:id", async(req, res) => {
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

module.exports = router