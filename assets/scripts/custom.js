"use strict"

// GOOGLE MAP

function initMap() {
  // The location of Uluru
  var vilnius = {lat: 54.731, lng: 25.272};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: vilnius});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: vilnius, map: map});

}

// GOOGLE MAP ENDS

// SMOOTH SCROLL 

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
        });
      }
    }
  });

  // SMOOTH SCROLL END
