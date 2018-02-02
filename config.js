var config = {};
config.cassandra = {};
config.cassandra.contactPoints = ['cassandra.dl-lb.svc'];
#config.cassandra.contactPoints = ['localhost'];
config.cassandra.keyspace = 'system';
module.exports = config;
