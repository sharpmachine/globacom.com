jQuery(document).ready(function(){

  $('#contactform').submit(function(){

    var action = $(this).attr('action');

    $("#message").slideUp(750,function() {
    $('#message').hide();

    $('#submit')
      .after('<img src="themes/bootstrap/img/ajax-loader.gif" class="loader" />')
      .attr('disabled','disabled');

    $.post(action, {
      name: $('#name').val(),
      company: $('#company').val(),
      address: $('#address').val(),
      city: $('#city').val(),
      zip: $('#zip').val(),
      country: $('#country').val(),
      mobile: $('#mobile').val(),
      landline: $('#landline').val(),
      email: $('#email').val(),
      option1: $('#option1').val(),
      option2: $('#option2').val(),
      option3: $('#option3').val()
      // subject: $('#subject').val(),
      // comments: $('#comments').val(),
      // verify: $('#verify').val()
    },
      function(data){
        document.getElementById('message').innerHTML = data;
        $('#message').slideDown('slow');
        $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
        $('#submit').removeAttr('disabled');
        if(data.match('success') != null) $('#contactform').slideUp('slow');

      }
    );

    });

    return false;

  });

});
