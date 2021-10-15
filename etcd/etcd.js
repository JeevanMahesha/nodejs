const { Etcd3 } = require("etcd3");

const client = new Etcd3();

const watchFooValue = async (key) => {
    return client
        .watch()
        .key(key)
        .create();
}

const getFooValue = async (key) => {
    return client.get(key).string()
}

module.exports = {
    getFooValue,
    watchFooValue
}