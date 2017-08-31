const express = require('express'),
	router = express.Router();

router.get('/main', function (request, response) {
	response.status(201);
	response.json({
		name: 'Daniel Petrini',
		email: 'd.pensator@gmail.com',
	});
});

// Donors
router.use('/donors', require('./donors'));

// Overall check
router.use('/check', require('./check'));

// Render views
router.use('/users', require('./users'));

module.exports = router;



// router.get('/', function (req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

// router.get('/new', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
