//https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
//used this as a base for this project

let express = require ('express'),
  app = express(),
  mongoose = require('mongoose'),
  Task = require('./api/models/models'),
  bodyParser = require('body-parser'),
  port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/newdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res) {
res.status(404).send({url: req.originalUrl + ' not found'})
});

let routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Express app successfully started on ' + port);
