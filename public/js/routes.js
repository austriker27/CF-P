'use strict';
var app = app || {};

page('/', () => {
  $('.tab-content').hide();
  // $('#articles').fadeIn();
});
page('/about', () => {
  $('.tab-content').hide();
  $('#about').fadeIn();
});
page('/interests', () => {
  $('.tab-content').hide();
  $('#interests').fadeIn();
});
page('/projects', () => {
  $('.tab-content').hide();
  $('#projects').fadeIn();
});
page('*', () => {
  $('.tab-content').hide();
  $('#projects').fadeIn();
});

page();
