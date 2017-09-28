'use strict';
var app = app || {};

page('/', () => {
  $('.sectionContent').hide();
  $('#topBannerImg').fadeIn();
  $('#bannerText').fadeIn();
});

page('/about', () => {
  app.repos.renderRepos();
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
  $('#about').hide();
  $('#mySkillsSection').hide();
  $('#portfolio').fadeIn();
});

page();
