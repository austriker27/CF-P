
Project.makeSectionsAppear = function() {
  $('.topNav').on('click', '.navTab', function() {
    $('.sectionContent').hide();
    $('#' + $(this).attr('data-content')).fadeIn();
  });

  $('.topNav .navTab:first').click();
};


$(document).ready(function() {
  Project.makeSectionsAppear();
});
