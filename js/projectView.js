
Project.makeSectionsAppear = function() {
  $('.topNav').on('click', '.navTab', function(event) {
    event.preventDefault();
    $('.sectionContent').hide();
    $('#' + $(this).attr('data-content')).fadeIn();
    console.log($(this).attr('data-content'));
  });

  $('.topNav .navTab:first').click();
};


$(document).ready(function() {
  Project.makeSectionsAppear();
});
