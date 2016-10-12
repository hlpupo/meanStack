/**
 * @author Hector Luis Reyes Pupo
 * @email hlpupodev@gmail.com
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongodb = require('mongodb').MongoClient;//especifi
var mongoose = require('mongoose')
var database;
var Message = mongoose.model('Message', {
  msg : String
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-type, Authorization');
  next();
});

var server = app.listen(5000, function () {
  console.log("Listen on ", server.address().port)
});


app.post('/api/message', function (req, res) {
  console.log(req.body);
  //database.collection('messages').insertOne(req.body);
  var message = new Message(req.body);
  message.save();
  res.status('200');
});
/**
 * Get all message
 */
app.get('/api/message', getMessages);


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


function getMessages(req, res) {
  Message.find({}).exec(function (err, result) {
    res.send(result);
  })
}
