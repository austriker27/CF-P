'use strict';

function Project (name, url, github, img, codebases) {
  this.name = name;
  this.url = url;
  this.github = github;
  this.img = img;
  this.codebases = codebases;
}

this.prototype.renderProject = function () {
  var anchor = document.getElementById('Portfolio');
  var projectName = document.createElement('h3');
  projectName.innerText = this.name;
  anchor.appendChild(projectName);

  var projectUrl = document.createElement('a');
  projectUrl.innerText = this.url;
  projectName.appendChild(projectUrl);

  var projectRepo = document.createElement('a');
  projectRepo.innerText = this.github;
  projectName.appendChild(projectRepo);

  var projectImg = document.createElement('img');
  projectImg.innerHTML = this.img;
  projectName.appendChild(projectImg);

  var projectLanguages = document.createElement('p');
  projectLanguages.innerText = this.codebases;
  projectName.appendChild(projectLanguages);
}

// TODO: projects to add : stop32, rainier watch, seattle adventure club, corn beans betas, david lindahl photography

var ghostown = new Project('Ghostown', 'http://ghostowngame.com', 'http://github.com/austriker27/ghostowngame', '../imgs/ghostowngame.jpg', 'Javascript, CSS & HTML');
