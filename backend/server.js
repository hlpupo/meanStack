/**
 * @author Hector Luis Reyes Pupo
 * @email hlpupodev@gmail.com
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongodb = require('mongodb').MongoClient;
var mongoose = require('mongoose')
var database;



var authController = require('./controller/auth')
var messageController = require('./controller/message')

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-type, Authorization');
  next();
});

var server = app.listen(5000, function () {
  console.log("Listen on ", server.address().port)
});


app.post('/api/message',messageController.post);
/**
 * Get all message
 */
app.get('/api/message', messageController.get);



app.post('/auth/signup', authController.register);

//connect server whit mongodb
/*mongodb.connect("mongodb://localhost:27017/test", function (err, db) {
 if(!err) {
 console.log("we are connected to mongodb")
 database = db;
 }
 });*/
//connect server whit mongodb
mongoose.connect("mongodb://localhost:27017/test", function (err, db) {
  if ( !err ) {
    console.log("we are connected to mongodb")
    database = db;
  }
});
