'use strict';

function Project (name, url, github, img, codebases) {
  this.name = name;
  this.url = url;
  this.github = github;
  this.img = img;
  this.codebases = codebases;
}

var ghostown = new Project('Ghostown', 'http://ghostowngame.com', 'http://github.com/austriker27/ghostowngame', '../imgs/ghostowngame.jpg', 'Javascript, CSS & HTML');

var stop32 = new Project('STOP32 Photography Club', 'http://stop32.org','https://github.com/austriker27/stop32.org', '../imgs/stop32.jpg', 'HTML & CSS');

var RainierWatch = new Project('Mount Rainier Watch', 'http://rainierwatch.com','https://github.com/austriker27/rainierwatch', '../imgs/rainierwatch.jpg', 'Javascript, HTML & CSS');

var SeattleAdventureClub = new Project('Seattle Adventure Club', 'http://seattleadventureclub.org','https://github.com/austriker27/seattleadventureclub', '../imgs/seattleadventureclub.jpg', 'HTML & CSS');

var CornBeansBetas = new Project('Corn, Beans, & Betas', 'http://cornbeansbetas.com','#', '../imgs/cornbeansbetas.jpg', 'WordPress, HTML & CSS');

var DavidLindahlPhoto = new Project('David Lindahl Photography', 'http://davidlindahlphoto.com','#', '../imgs/davidlindahlphoto.jpg', 'Design, & Photography');

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

Project.all.push(this);
