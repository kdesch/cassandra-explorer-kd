var config = {};
config.cassandra = {};
config.cassandra.contactPoints = ['cassandra-db-lb.lb-cnap.bmwgroup.net'];
config.cassandra.keyspace = 'animals';
module.exports = config;
