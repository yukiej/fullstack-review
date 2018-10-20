const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;

let repoSchema = new mongoose.Schema({
  _id: Number,
  repo_name: String,
  owner_name: String,
  owner_id: Number,
  forks: Number,
  url: String
});

let Repo = mongoose.model('Repo', repoSchema);

//input: an array of repos (JSON objects) returned by GitHub API
// This function should save a repo or repos to the MongoDB
let save = (repos) => {
  let newCols = [];
  //for each repo in the array, pull out the info we want to put in the database
  for (let i = 0; i < repos.length; i += 1) {
    let repo = repos[i];
    let col = new Repo({
      _id: repo.id,
      name: repo.name,
      owner_id: repo.owner.id,
      forks: repo.forks,
      url: repo.git_url
    });
    newCols.push(col);
    
  }
  db.collection('Repos').insertMany(newCols);
}

module.exports.save = save;