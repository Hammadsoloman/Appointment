var config = {};

// config.dbhost = 'mongodb+srv://Hammad:0000@cluster0-hsvpu.mongodb.net/test';
config.dbhost= await createConnection({
    type: "mongodb",
    url: "mongodb+srv://Hammad:0000@cluster0-hsvpu.mongodb.net/test?retryWrites=true",
    ssl: true,
    authSource: "admin",
    replicaSet: "TestCluster0-shard-0"
});
config.host = process.env.HOST || 'http://localhost';

module.exports = config;
