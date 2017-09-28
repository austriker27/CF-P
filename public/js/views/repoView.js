'use strict';

var app = app || {};

(function(module) {
  repos.renderRepos = function() {
    var sourceHTML = $('#repo-template').html();
    var actualTemplate = Handlebars.compile(sourceHTML);
    var newReps = actualTemplate(this);
    return newReps;

  module.Repos = Repos;
}(app));
