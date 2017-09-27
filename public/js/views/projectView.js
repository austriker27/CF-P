'use strict';

var app = app || {};

$('#hamburgerMenu').on('click', function(event) {
  event.preventDefault();
  $('.navTab').toggle('fast');
});

//
// (function(module) {
//   const articleView = {};
//
//
//     app.Article.fetchAll(articleView.initIndexPage);
//     module.articleView = articleView;
//   })(app);
