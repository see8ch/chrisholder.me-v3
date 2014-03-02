// Scroll to Top
$(document).ready(function() {
  // Show or hide the sticky footer button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 333) {
      $('.go-top').fadeIn(333);
    } else {
      $('.go-top').fadeOut(333);
    }
  });

  // Animate the scroll to top
  $('.go-top').click(function(event) {
    event.preventDefault();

    $('html, body').animate({scrollTop: 0}, 450);
  })
});


// Input Lock
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('#hire textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('#hire textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('#hire .field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('#hire .field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('#hire .field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('#hire .field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});

