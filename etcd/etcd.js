const { Etcd3 } = require("etcd3");

const etcdClient = new Etcd3();

const watchTheKeyValueChange = async (key) => {
    return etcdClient
        .watch()
        .key(key)
        .create();
}

const getValueFromETCD = async (key) => {
    return etcdClient.get(key).string()
}

module.exports = {
    watchTheKeyValueChange,
    getValueFromETCD
}