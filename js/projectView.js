
// this code makes you scroll to the top of section
$('#aboutMe').on('click', function(){
  $('main').hide();
  $('main [class="'+$(this).attr('data-content')+'"]').fadeIn();
  $('html, body').animate({
    scrollTop: $('#bannerText').position().top
  });
});

$('#mySkills').on('click', function(){
  $('html, body').animate({
    scrollTop: $('#mySkillsSection').position().top
  });
});

$('#myProjects').on('click', function(){
  $('html, body').animate({
    scrollTop: $('#Portfolio').position().top
  });
});

Project.makeSectionsAppear = function() {
  $('.topNav').on('click', '.navTab', function() {
    $('.sectionContent').hide();
    $('#' + $(this).attr('data-content')).fadeIn();
  });

  // $('.topNav .navTab:first').click();
};


$(document).ready(function() {
  Project.makeSectionsAppear();
});
