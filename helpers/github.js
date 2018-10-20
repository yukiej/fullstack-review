const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let url = `https://api.github.com/users/${username}/repos`;

  let options = {
    url: url,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, callback);
}

let repoReqCB = function(error, response, body) {
  if (!error) {
    //probably want to call save here?
    console.log("success getting repos!", body);
  } else {
    console.error("Uh oh, error connecting to GitHub API!")
  }
}

module.exports.getReposByUsername = getReposByUsername;