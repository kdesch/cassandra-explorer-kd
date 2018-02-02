var config = {};
config.cassandra = {};
config.cassandra.contactPoints = [process.env.CASSANDRA_SERVICE_NAME, 'cassandra-db-lb.lb-cnap.bmwgroup.net', 'cassandra.db-lb.svc.cluster.local'];
config.cassandra.keyspace = process.env.CASSANDRA_KEYSPACE;
module.exports = config;
