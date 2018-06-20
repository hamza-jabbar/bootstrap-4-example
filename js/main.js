$(function() {
    'use-strict';

    // Adjust slider height
    var wH      = $(window).height(),
        upperH  = $('.upper-bar').innerHeight(),
        navH    = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));
});