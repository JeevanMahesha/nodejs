const { Etcd3 } = require("etcd3");

const client = new Etcd3();

const watchFooValue = async (key) => {
    return await
        client
            .watch()
            .key(key)
            .create();
}

const getFooValue = async (key) => {
    return await client.get(key).string()
}

module.exports = {
    getFooValue,
    watchFooValue
}