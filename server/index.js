const express = require('express');
const { save } = require('../database/index.js');
let app = express();
const bodyParser = require('body-parser');
const { getReposByUsername } = require('../helpers/github.js');

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//routes
app.post('/repos', function (req, res) {
  let username = req.body.term;
  getReposByUsername(username, (error, res, body) => {
    console.log("The gibhub request worked! First repo in res body is: ", JSON.parse(body)[0]);
    save(JSON.parse(body));
  });
  
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.status(201).send(`Got your get request!`);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

// getReposByUsername('yukiej');
// console.log(save);

// save(testData);