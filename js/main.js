$(document).on('ready', function() {

});

$('button.signin').click(function() {
  $('div.modal').fadeIn();
});


$('button.close').click(function() {
  $('div.modal').fadeOut();
});

$('button.submit').click(function() {
  $('.getstarted input').addClass("error");
});

$('.getstarted input').focus(function() {
  $(this).removeClass("error");
});
