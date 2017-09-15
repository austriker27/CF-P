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
  var sourceHTML = $('#article-template').html();
  var actualTemplate = Handlebars.compile(sourceHTML);
  // var $newProject = $('.template').clone();
  // $newProject.removeClass('template');
  // $newProject.find('h3')
  //            .text(this.title);
  // $newProject.find('a')
  //            .eq(0).attr('href', this.url);
  // $newProject.find('a')
  //            .eq(1).attr('href',this.githubURL);
  // $newProject.find('img')
  //            .attr('src',this.img);
  // $newProject.find('p')
  //            .eq(0).text(this.skillsUsed);
  // $('.anchorProjects').append($newProject);
  var newRawHTML = actualTemplate(this);
  $('main').append(newRawHTML);
};

Project.all = [];

projectsList.forEach(function(project) {
  new Project(project);
});

Project.all.forEach(function(project) {
  project.toHtml();
});
// this code makes you scroll to the top of section
// $('#aboutMe').on('click', function(){
//   $('main').hide();
//   $('main [id|="'+$(this).attr('data-content')+'"]').fadeIn();
//   $('html, body').animate({
//     scrollTop: $('#bannerText').position().top
//   });
// });
//
// $('#mySkills').on('click', function(){
//   $('html, body').animate({
//     scrollTop: $('#mySkillsSection').position().top
//   });
// });
//
// $('#myProjects').on('click', function(){
//   $('html, body').animate({
//     scrollTop: $('#Portfolio').position().top
//   });
// });

Project.all.makeSectionsAppear = function() {
  $('.topNav').on('click', '.navTab', function() {
    $('.sectionContent').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.topNav .navTab:first').click();
};


$(document).ready(function() {
  Project.all.makeSectionsAppear();
});
