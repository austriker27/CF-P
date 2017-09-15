'use strict';

var projects = [];

function Project (projectsListObj) {
  this.title = projectsListObj.title;
  this.url = projectsListObj.url;
  this.githubURL = projectsListObj.githubURL;
  this.img = projectsListObj.img;
  this.skillsUsed = projectsListObj.skillsUsed;
  // Project.all.push(this);
}
// Project.all = [];

Project.prototype.toHtml = function() {
  var sourceHTML = $('#project-template').html();
  var actualTemplate = Handlebars.compile(sourceHTML);
  var newRawHTML = actualTemplate(this);
  $('main').append(newRawHTML);
};

projectsList.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project){
  $('.projects').append(project.toHtml());
});

// // this code makes you scroll to the top of section
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
//
// Project.makeSectionsAppear = function() {
//   $('.topNav').on('click', '.navTab', function() {
//     $('.sectionContent').hide();
//     $('#'+$(this).attr('data-content')+' ' ).fadeIn();
//     console.log($('#'+$(this).attr('data-content' + ' ' )));
//   });
//
//   // $('.topNav .navTab:first').click();
// };
//
//
// $(document).ready(function() {
//   Project.makeSectionsAppear();
// });
