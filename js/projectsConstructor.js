'use strict';

function Project (name, url, github, img, codebases) {
  this.name = name;
  this.url = url;
  this.github = github;
  this.img = img;
  this.codebases = codebases;
}

new Project ('Ghostown', 'http://ghostowngame.com', 'http://github.com/austriker27/ghostowngame', '../imgs/ghostowngame.jpg', 'Javascript, CSS & HTML');
