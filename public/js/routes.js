'use strict';
var app = app || {};

page('/', () => { /index });

page('/about', () => {
  $('.data-content').hide();
  $('#about').fadeIn();
});
page('/interests', () => {
  $('.data-content').hide();
  $('#interests').fadeIn();
});
page('/projects', () => {
  $('.data-content').hide();
  $('#projects').fadeIn();
});
page('*', () => {
  $('.data-content').hide();
  $('#projects').fadeIn();
});

page();
