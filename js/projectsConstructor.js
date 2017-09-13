'use strict';

function Project (name, url, github, img, codebases) {
  this.name = name;
  this.url = url;
  this.github = github;
  this.img = img;
  this.codebases = codebases;
}

// TODO: projects to add : stop32, rainier watch, seattle adventure club, corn beans betas, david lindahl photography

var ghostown = new Project('Ghostown', 'http://ghostowngame.com', 'http://github.com/austriker27/ghostowngame', '../imgs/ghostowngame.jpg', 'Javascript, CSS & HTML');

Project.prototype.renderProject = function () {
  var $newProject = $('template').clone();
  $newProject.find('h3')
             .text(this.name);
  $newProject.find('a')
             .eq(1).attr('href', 'this.url');
  $newProject.find('a')
             .eq(2).attr('href','this.github');
  $newProject.find('img')
             .eq(2).src('this.img');
  $newProject.find('p')
             .eq(1).text('this.codebases');
}
