const mongodb = require('mongodb')
const mongoclient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-db'

mongoclient.connect(connectionURL, { 'useNewUrlParser': true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect the Database');
    }
    const db = client.db(databaseName)

    //=======    INSERT ONE RECORD TO DB  ==========
    // db.collection('user').insertOne({
    //     "name": "jeevan",
    //     "age": 23
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert to db');
    //     }
    //     console.log(result.ops);
    // })

    //=======    INSERT MANY RECORD TO DB  ==========
    db.collection('task').insertMany([{
        description: "this is first record",
        completed: true
    }, {
        description: "this is secound record",
        completed: false
    }, {
        description: "this is third record",
        completed: true
    }], (error, result) => {
        if (error) {
            return console.log('Unable to insert record');
        }
        console.log(result.ops);
    })
})