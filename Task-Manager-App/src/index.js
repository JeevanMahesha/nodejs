const express = require("express")
require("./db/db_connect_mangoose")
const userRouter = require("./routers/userRouter")
const taskRouter = require("./routers/taskRouter")


const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send("GET method is not Working")
//     } else {
//         next()
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})