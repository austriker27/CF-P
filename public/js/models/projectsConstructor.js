'use strict';

var app = app || {};

// var projects = [];

(function(module) {
  function Project (projectsListObj) {
    this.title = projectsListObj.title;
    this.url = projectsListObj.url;
    this.githubURL = projectsListObj.githubURL;
    this.img = projectsListObj.img;
    this.skillsUsed = projectsListObj.skillsUsed;
  }

  Project.projects = [];

  Project.prototype.toHtml = function() {
    var sourceHTML = $('#project-template').html();
    var actualTemplate = Handlebars.compile(sourceHTML);
    var newRawHTML = actualTemplate(this);
    return newRawHTML;
  };

  Project.loadAll = rows => {
    Project.projects = Project.projects.map((projectObject) => new Project(projectObject));
  };

  Project.initIndexPage = function() {
    Project.projects.forEach(function(project){
      $('.projectsAnchor').append(project.toHtml());
    });
  };

  Project.fetchAll = function() {
    if (localStorage.projectsList) {
      Project.loadAll(JSON.parse(localStorage.projectsList));
      Project.initIndexPage();
    } else {
      $.get('/data/projects.json', (response => {
        localStorage.setItem('projectsList', JSON.stringify(response));
        Project.loadAll(response);
        Project.initIndexPage();
      })
      );
    }
  };
  module.Project = Project;
}(app));
