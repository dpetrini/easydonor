'use strict';

const	mongojs = require('mongojs'),
	config	= require('config'),
	debug 	= require('debug')('donors:db');

	debug('NODE_ENV:' + process.env.NODE_ENV);

// Case of Local connection
function _connection2 () {
	const username = '',
		password = '',
		server = '127.0.0.1',
		port = 27017,
		database = 'DONORSLocal',
		auth = username ? username + ':' + password + '@' : '';
	return 'mongodb://' + auth + server + ':' + port + '/' + database;
}

// Cloud connection reading from config file
function _connection () {
	let temp = '';
	const username = config.get('mongo.username'),
		password = config.get('mongo.password'),
		server = config.get('mongo.server'),
		port = config.get('mongo.port'),
		database = config.get('mongo.database'),
		ssl = config.get('mongo.ssl'),
		auth = username ? username + ':' + password + '@' : '';

	debug(`Database: ${ database }`);
	temp = 'mongodb://' + auth + server + '' + port + '/' + database + ssl;
	debug(`Connection: ${ temp }`);

	return temp;
}
// const db = mongojs(_connection());
const db = mongojs(_connection());
db.on('error', (err) => {
	debug(err);
	console.log(err);
});
db.on('connect', () => {
	console.log('Mongo database connected');
});
module.exports = db;
