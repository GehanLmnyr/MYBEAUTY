$(document).ready(function(){
$('.owl-carousel').owlCarousel({
 
    animateOut: 'bounceOutRight',
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    },
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    autoplayHoverPause:true
    })
});