/*
  Main Express App for Donor System

  Daniel Petrini - Evaluation - 18/08/2017

*/

const debug = require('debug')('app.js');
const express = require('express');
const methodOverride  = require('method-override');
const bodyParser      = require('body-parser');
var expressValidator = require('express-validator');
const cors = require('cors');

const app = express();
const path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// server config
app.use(methodOverride('X­HTTP­Method'));
app.use(methodOverride('X­HTTP­Method­Override'));
app.use(methodOverride('X­Method­Override'));
app.use(methodOverride('_method'));

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator()); // To perform form validation

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// router
app.use('/', require('./routes'));

// error handling
app.use(function(request, response, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, request, response, next) {
	response.status(err.status || 500).json({ err: err.message });
});

// server listener
module.exports = app;