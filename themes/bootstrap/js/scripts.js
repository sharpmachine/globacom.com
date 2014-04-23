$(document).ready(function() {
  $('a.all-products-more-info').click(function(e){
    e.preventDefault();
    $('.all-products-content').slideToggle();
    $(this).html($(this).html() == 'Less Info <span class="caret caret-up"></span>' ? 'More Info <span class="caret"></span>' : 'Less Info <span class="caret caret-up"></span>');
  });
  return false
});
