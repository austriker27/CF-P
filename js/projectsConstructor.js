'use strict';

function Project (projectsListObj) {
  this.title = projectsListObj.title;
  this.url = projectsListObj.url;
  this.githubURL = projectsListObj.githubURL;
  this.img = projectsListObj.img;
  this.skillsUsed = projectsListObj.skillsUsed;
  Project.all.push(this);
}

Project.prototype.renderProject = function() {
  var $newProject = $('.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h3')
             .text(this.name);
  $newProject.find('a')
             .eq(1).attr('href', 'this.url');
  $newProject.find('a')
             .eq(2).attr('href','this.githubURL');
  $newProject.find('img')
             .src('this.img');
  $newProject.find('p')
             .eq(1).text('this.skillsUsed');
  $('.anchorProjects').append($newProject);
}

Project.all = [];

Projects.forEach(function(projectsList) {
  $('.template').append(Project.renderProject())
}
