const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let url = `https://api.github.com/users/${username}`;

  let options = {
    url: url,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  let repoReqCB = function(error, response, body) {
    if (!error) {
      console.log("success getting repos!", body);
    }
  }
  request(options, repoReqCB);
}

module.exports.getReposByUsername = getReposByUsername;