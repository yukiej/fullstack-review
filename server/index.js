const express = require('express');
const { save } = require('../database/index.js');
let app = express();

const testData = require('../data.json');

const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/fetcher';

mongoose.connect(mongoDB, {useMongoClient: true}, function(error, success) {
  if (error) {
    console.error.bind(console, 'Error connecting to database!');
  } else {
    console.log("Successfully connected to mongoDB database!");
  }
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

//middleware
app.use(express.static(__dirname + '/../client/dist'));


//routes
app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  res.send('Got your get!');
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

// console.log(save);

// save(testData);