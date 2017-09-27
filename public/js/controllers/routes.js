'use strict';
var app = app || {};

page('/', app.Project.initIndexPage );

page('/about', app.aboutController.index);
page('/portfolio', app.projectsController.index);

//
// page('/about', () => {
//   $('.data-content').hide();
//   $('#about').fadeIn();
// });
// page('/interests', () => {
//   $('.data-content').hide();
//   $('#interests').fadeIn();
// });
// page('/projects', () => {
//   $('.data-content').hide();
//   $('#projects').fadeIn();
// });

page();
