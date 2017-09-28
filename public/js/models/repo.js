'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('/github/user/repos', function (response) {
      console.log(response);
      return repos.all = response;
    }
    )
      .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  repos.renderRepos = function() {
    let sourceHTML = $('#repo-template').html();
    let actualTemplate = Handlebars.compile(sourceHTML);
    console.log(repos.all);
    $('#about').append(repos.all.with('name').map(actualTemplate));
  };

  module.repos = repos;
})(app);
