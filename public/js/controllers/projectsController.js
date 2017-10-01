'use strict';
var app = app || {};

(function(module) {
  const projectController = {};
  projectController.index = () => {
    app.Project.fetchAll(app.Project.initIndexPage);

    $('main > section').hide();
    $('.projectsAnchor').show();
  };

  module.projectController = projectController;
})(app);
