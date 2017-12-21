$(document).ready(function () {
    $('.slider').slick({
        adaptiveHeight: true,
        dots: true,
        arrows:false
        /*dotsClass:'slider-dots'*/

    });

    $('select').niceSelect();

    $('#myTab').jqTabs({
        direction: 'horizontal'
    });

});