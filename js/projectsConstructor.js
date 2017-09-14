'use strict';

function Project (projectsListObj) {
  this.title = projectsListObj.title;
  this.url = projectsListObj.url;
  this.githubURL = projectsListObj.githubURL;
  this.img = projectsListObj.img;
  this.skillsUsed = projectsListObj.skillsUsed;
  Project.all.push(this);
}

Project.prototype.toHtml = function() {
  var $newProject = $('.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h3')
             .text(this.title);
  $newProject.find('a')
             .eq(0).attr('href', this.url);
  $newProject.find('a')
             .eq(1).attr('href',this.githubURL);
  $newProject.find('img')
             .attr('src',this.img);
  $newProject.find('p')
             .eq(0).text(this.skillsUsed);
  $('.anchorProjects').append($newProject);
};

Project.all = [];

projectsList.forEach(function(project) {
  new Project(project);
});

Project.all.forEach(function(project) {
  project.toHtml();
});

$('#aboutMe').on('click', function(){
  $('html, body').animate({
    scrollTop: $('#here').position().top
  });
});

$('#mySkills').on('click', function(){
  $('html, body').animate({
    scrollTop: $('#here').position().top
  });
});

$('#myProjects').on('click', function(){
  $('html, body').animate({
    scrollTop: $('#here').position().top
  });
});
