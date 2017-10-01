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

  Project.loadAll = rows => {
    Project.projects = Project.projects.map((projectObject) => new Project(projectObject));
  };

  Project.prototype.toHtml = function() {
    let sourceHTML = $('#project-template').html();
    let actualTemplate = Handlebars.compile(sourceHTML);
    $('.projectsAnchor').append(Project.projects.map(actualTemplate));
  };

  Project.initIndexPage = function() {
    Project.projects.forEach(function(project){
      $('.projectsAnchor').append(project.toHtml());
    });
  };

  Project.fetchAll = function() {
    if (localStorage.projectsList) {
      Project.prototype.toHtml(JSON.parse(localStorage.projectsList));
      Project.initIndexPage();
    } else {
      $.get('/data/projects.json', (response => {
        localStorage.setItem('projectsList', JSON.stringify(response));
        console.log(response);
        Project.loadAll(response);
        Project.initIndexPage();
      })
      );
    }
  };
  module.Project = Project;
}(app));
