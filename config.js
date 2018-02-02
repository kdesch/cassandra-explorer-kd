var config = {};
config.cassandra = {};
config.cassandra.contactPoints = ['cassandra.db-lb.svc'];
config.cassandra.keyspace = 'system';
module.exports = config;
