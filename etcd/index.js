const express = require("express");
const etcdGetAndWatch = require("./etcd")

const app = express();

app.use(express.json())

let fooValue = "No Foo Value is updated"
let key = "foo"

app.get('/', async (req, res) => {
    fooValue = await etcdGetAndWatch.getFooValue(key);
    const watcher = await etcdGetAndWatch.watchFooValue(key);
    watcher.on("put", watcherPut)
    res.send('This is Foo Value : ' + fooValue)
});

function watcherPut(watchValue) {
    fooValue = watchValue.value.toString();
}

setInterval(() => {
    console.log(fooValue);
}, 2000)

app.listen(8080, () => {
    console.log("I'm Up");
})

