'use strict';

var app = app || {};

//
// app.makeSectionsAppear = function() {
//   $('.topNav').on('click', '.navTab', function(event) {
//     event.preventDefault();
//     $('.sectionContent').hide();
//     $('#' + $(this).attr('data-content')).fadeIn();
//   });
//
//   $('.topNav .navTab:first').click();
// };


$(document).ready(function() {
  app.makeSectionsAppear();
});


$('#hamburgerMenu').on('click', function(event) {
  event.preventDefault();
  $('.navTab').toggle('fast');
});
