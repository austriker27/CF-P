'use strict';
var app = app || {};

(function(module) {
  const projectController = {};
  projectController.index = () => {
    app.Project.fetchAll(app.projectView.initIndexPage);

    $('main > section').hide();
    $('.projectsAnchor').show();
  };

  module.projectController = projectController;
})(app);
