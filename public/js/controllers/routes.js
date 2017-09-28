'use strict';
var app = app || {};

page('/', () => {
  $('.sectionContent').hide();
  $('#topBannerImg').fadeIn();
  $('#bannerText').fadeIn();
});

page('/about', () => {
  $('#interests').hide();
  $('#portfolio').hide();
  $('#about').fadeIn();
});

page('/interests', () => {
  $('main').hide();
  $('#interests').fadeIn();
});

page('/portfolio', () => {
  $('main').hide();
  $('#projects').fadeIn();
});

page();
