$(document).ready(function () {
    $('.slider').slick({
        adaptiveHeight: true,
        dots: true,
        arrows:false


    });
    $('.button-toogle').click(function () {
        $('.nav').fadeToggle('.active-menu')


    });

    $('select').niceSelect();

    $('#myTab').jqTabs({
        direction: 'horizontal'
    });

});