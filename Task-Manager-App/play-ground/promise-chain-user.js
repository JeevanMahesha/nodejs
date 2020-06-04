require("../src/db/db_connect_mangoose");
const User = require("../src/models/user");


User.findByIdAndUpdate("5ed695ce033f0031984609e7", { age: 23 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 18 })
}).then((ageCount) => {
    console.log(ageCount);
}).catch((er) => {
    console.log(er);
})