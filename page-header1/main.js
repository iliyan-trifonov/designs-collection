$(function() {
  var active = $('li.active').find('a');
  var content = $('p.content');
  content.text(active.text() + ' content');
  $('a').each(function() {
    $(this).on('click', function(ev) {
      ev.preventDefault();
      $('a').each(function() {
        $(this).parent().removeClass('active');
      });
      $(this).parent().addClass('active');
      content.text($(this).text() + ' content');
    });
  });
});
