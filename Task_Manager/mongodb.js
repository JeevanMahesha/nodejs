const mongodb = require('mongodb')
const mongoclient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-db'

mongoclient.connect(connectionURL, { 'useNewUrlParser': true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect the Database');
    }
    const db = client.db(databaseName)
    db.collection('user').insertOne({
        "name": "jeevan",
        "age": 23
    })
})