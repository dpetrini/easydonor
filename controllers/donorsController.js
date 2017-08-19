/** Donors Controller
 *   Responds to Express Rourter for /donors
 *   Receives data  and send to models (database). Donors app
 * @module donorsController
 */

const debug = require('debug')('donors:controller');


// Objeto escopo desta funcao foi passado pelo router e eh atribuido em this abaixo
function donorsController (donorsModel) {
	this.model = donorsModel;
}

donorsController.prototype.getAll = function (request, response, next) {
	this.model.find({}, (err, data) => {
		if (err) {
			return next(err);
		}
		response.json(data);
	});
};
donorsController.prototype.getById = function (request, response, next) {
	const _id = request.params._id;
	this.model.findOne(_id, (err, data) => {
		if (err) {
			return next(err);
		}
		if (!data) {
			err = new Error('Not Found');
			err.status = 404;
			return next(err);
		}
		response.json(data);
	});
};
donorsController.prototype.create = function (request, response, next) {
	const body = request.body;
	debug(body);
	this.model.create(body, (err, data) => {
		if (err) {
			return next(err);
		}
		response.json(data);
	});
};
/*
Creates based in GET with parameters
Validates user (machine) input

Get URL example: /sensor?node_id=100&temp=27&humd=80&state="Op/Ok"
http://127.0.0.1:3000/donors/donors/?firstName=Daniel&lastName=Petrini&contactNumber=11996586833&
  emailAddress=ddd@gmail.com&bloodGroup=B+&lat=23.45&long=56.00&ip=127.0.0.1
*/
donorsController.prototype.createNew = function (req, response, next) {
	const timeNow = new Date();
	const time = timeNow.getTime();

	debug(`${ req.query.firstName } | ${ req.query.lastName } | ${req.query.emailAddress } | ${ time }`);

	const deviceData
	= {
		firstName: req.query.firstName,
		lastName: req.query.lastName,
		contactNumber: req.query.contactNumber,
		emailAddress: req.query.emailAddress,
		bloodGroup: req.query.bloodGroup,
		lat: req.query.lat,
		long: req.query.long,
		ip: req.query.ip,
		time,

	};

	debug(deviceData);

	this.model.create(deviceData, (err, data) => {
		if (err) {
			return next(err);
		}
		response.json(data);
	});
};

donorsController.prototype.update = function (request, response, next) {
	const _id = request.params._id;
	const body = request.body;
	this.model.update(_id, body, (err, data) => {
		if (err) {
			return next(err);
		}
		debug(` update response:${ JSON.stringify(data) }`);
		response.json(data);
	});
};
donorsController.prototype.remove = function (request, response, next) {
	const _id = request.params._id;
	this.model.remove(_id, (err, data) => {
		if (err) {
			return next(err);
		}
		response.json(data);
	});
};

module.exports = function (donorsModel) {
	return new donorsController(donorsModel);
};
