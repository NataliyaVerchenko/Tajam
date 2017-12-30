$(document).ready(function () {
    $('.slider').slick({
        adaptiveHeight: true,
        dots: true,
        arrows:false


    });
    $('.button-toogle').click(function () {
        $('.nav').fadeToggle()


    });
    $('.slider-testimonial').slick({
        adaptiveHeight: true,
        dots: false,
        arrows:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '5px'


    });
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


});