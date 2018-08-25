//express application

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//Set up the express app
const app = express();

//Log requests to the console
app.use(logger('dev'));

//Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set up a default catch-all route 
//that sends back a welcome message in JSON format.
require('./server/routes')(app); // Require our routes into the application
app.get('*', (req, res)=> res.status(200).send({
	message: 'Welcome to the stage where the shadow is overcome'
}));

module.exports = app;