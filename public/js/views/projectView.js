'use strict';

var app = app || {};

$('#hamburgerMenu').on('click', function(event) {
  event.preventDefault();
  $('.navTab').toggle('fast');
});
