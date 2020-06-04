require("../src/db/db_connect_mangoose")
const Task = require("../src/models/task")

Task.findByIdAndDelete("5ed89191f7cc4b346c039ad0").then(() => {
    return Task.countDocuments({ completion: false })
}).then((completionStatus) => {
    console.log(completionStatus);
}).catch((er) => {
    console.log(er);
})