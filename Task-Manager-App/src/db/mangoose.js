const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-db', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'Jeevan',
    age: 23
})
me.save().then(() => {
    console.log(me);
}).catch((error) => {
    console.log('Error', error);
})