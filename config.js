var config = {};
config.cassandra = {};
config.cassandra.contactPoints = [process.env.CASSANDRA_SERVICE_NAME];
config.cassandra.keyspace = process.env.CASSANDRA_KEYSPACE;
module.exports = config;
