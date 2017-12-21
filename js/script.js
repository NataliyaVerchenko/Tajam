$(document).ready(function () {
    $('.slider').slick({
        adaptiveHeight: true,
        dots: true,
        arrows:false


    });

    $('select').niceSelect();

    $('#myTab').jqTabs({
        direction: 'horizontal'
    });

});