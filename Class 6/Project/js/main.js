jQuery(document).ready(function($) {
    $(".js-blog-carousel").owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:5000,
        margin:0,
        nav:true,
        dots: false,
        navText: ["<img src='images/left-arrow.png'>", "<img src='images/right-arrow.png'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        },

    });
});