$(document).ready(function() {
  $('a.all-products-more-info').click(function(e){
    e.preventDefault();
    $('.all-products-content').slideToggle();
    $(this).html($(this).html() == 'Less Info <span class="caret caret-up"></span>' ? 'More Info <span class="caret"></span>' : 'Less Info <span class="caret caret-up"></span>');
  });
  return false
});


$(document).ready(function() {
  $('input#option1').change(function(){
    if ($(this).is(':checked')) {
      $(this).attr('value', 'ProShield-Single-Line / SIP account');
    } else if ($(this).not(':checked')) {
      $(this).attr('value', '');
    }
  });
  $('input#option2').change(function(){
    if ($(this).is(':checked')) {
      $(this).attr('value', 'ProShield-Multi-Line / VirtualPBX');
    } else if ($(this).not(':checked')) {
      $(this).attr('value', '');
    }
  });
  $('input#option3').change(function(){
    if ($(this).is(':checked')) {
      $(this).attr('value', 'ExecutiveShield Multi-Line / VirtualPBX');
    } else if ($(this).not(':checked')) {
      $(this).attr('value', '');
    }
  });
});
