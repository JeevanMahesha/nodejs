const mongoose = require("mongoose")
const validator = require("validator")

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-db', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error("Email is Invalid")
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 7,
//         trim: true,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error("Password contain word password")
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 18,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error("This age must be Positive number")
//             }
//         }
//     }

// })

// const me = new User({
//         name: "   latha   ",
//         email: "jeevan@GMAIL.com",
//         password: "      12asdasd67"
//     })
// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error', error);
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completion: {
        type: Boolean,
        default: false
    }
})

const newTask = new Task({
    description: "       This is Task Description    ",
})


newTask.save().then(() => {
    console.log(newTask);
}).catch((error) => {
    console.log('Error', error);
})