'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('/github/user/repos',function (response) {
      repos.all = response.map(function(repo) {
        return repo;
      }
      );
    })
      .then(callback,
        err => console.error(err.status, err.statusText, 'is the broke stuff. Good luck fixing it.'));
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);
  module.repos = repos;
})(app);
