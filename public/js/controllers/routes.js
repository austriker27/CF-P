'use strict';
var app = app || {};

page('/', () => {
  $('.sectionContent').hide();
  $('#topBannerImg').fadeIn();
  $('#bannerText').fadeIn();
});

page('/about', () => {
  app.repos.requestRepos(app.repos.renderRepos);
  $('#mySkillsSection').hide();
  $('#portfolio').hide();
  $('#about').fadeIn();
});

page('/interests', () => {
  $('#about').hide();
  $('#portfolio').hide();
  $('#mySkillsSection').fadeIn();
});

page('/portfolio', () => {
  app.projectController.index();
  $('#about').hide();
  $('#mySkillsSection').hide();
  $('#portfolio').fadeIn();
});

page();
