$(document).ready(function () {
    $('.slider').slick({
        adaptiveHeight: true,
        dots: true
        // dotsClass: 'slider-dots'

    });

    $('select').niceSelect();

    $('#myTab').jqTabs({
        direction: 'horizontal'
    });

});