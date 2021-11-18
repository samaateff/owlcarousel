$(document).ready(function(){


$('.owl-carousel.ThemeCoderClass').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    autoplay: true,
    autoplayTimeout:2000,
    autoplaySpeed:2000,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        },
    }
});

var owl = $('.ThemeCoderClass');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});
});

$(document).ready(function(){

$('.owl-carousel.ThemeCoderClass2').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: true,
    autoplay: true,
    autoplayTimeout:2000,
    autoplaySpeed:2000,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        },
        1200:{
            items:3
        },
    }
});

var owl = $('.ThemeCoderClass2');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn2').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn2').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

});