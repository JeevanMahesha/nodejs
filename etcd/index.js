const express = require("express");
const etcdGetAndWatch = require("./etcd")

const app = express();

app.use(express.json())

let fooValue
key = "foo"
app.get('/', async (req, res) => {
    fooValue = await etcdGetAndWatch.getFooValue(key)
    await etcdGetAndWatch.watchFooValue(key).then(
        (watcher) => {
            watcher.on("put", res => {
                if (res.value.toString()) {
                    fooValue = res.value.toString()
                    console.log(res.value.toString());
                }
            })
        }
    )
    res.send('This is Foo Value : ' + fooValue)
});

setInterval(() => {
    console.log(fooValue);
}, 2000)

app.listen(8080, () => {
    console.log("I'm Up");
})

