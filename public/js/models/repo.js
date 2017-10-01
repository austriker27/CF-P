'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('/github/user/repos', function(data) {
      repos.all = data;
      callback();
    })
      .then(data => repos.all = data, err => console.error(err)) // es6 syntax arrow functions
      .then(callback);
  };

  repos.renderRepos = function() {
    let sourceHTML = $('#repo-template').html();
    let actualTemplate = Handlebars.compile(sourceHTML);
    $('#about').append(repos.all.map(actualTemplate));
  };

  module.repos = repos;
})(app);
