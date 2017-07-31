$(document).ready(function () {


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut'
    });

    function sameHeight(itemName) {
        maxHeight = 0;
        $(itemName).each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        $(itemName).each(function () {
            $(this).height(maxHeight);

        });
    }

    var maxHeight = 0;
    $('.fifth-block .item').each(function () {
        console.log($(this).height());
        console.log($(this).css('height'));
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    if (window.innerWidth > 768){
    $('.fifth-block .item').each(function () {
        $(this).height(maxHeight);
        $(this).find('hr').css('position', 'absolute');

    });
    
    $('.fifth-block .item').hover(function () {
        var count = $(this).attr('count');
        var image = 'url(img/fifth-block-left-part' + count + '.png)';
        $('.fifth-block .left-part .bg').css('background-image', image);
        $('.fifth-block .mini-circle').css('top', 'calc(' + 25 * count + '% - 12px)');
        $('.fifth-block .items').find('hr').css('left', '0px');
        $('.fifth-block .items').find('hr').css('width', '100%');
        $(this).find('hr').css('left', '-20%');
        $(this).find('hr').css('width', '120%');
    });
    
        sameHeight('.nineth-block .item');
        //10 блок
        sameHeight('.tenth-block .item');

    }
   
                AOS.init({
                    disable: 'mobile'
                });

    var blockHeight = $('.tenth-block .item').height() + 40;
    var top;
    var nech = 0;
    var ch = 1;
    $('.tenth-block .numbs .numb').each(function () {
        var numb = $(this).attr('numb');
        if (numb & 1) {
            if (numb == 1) {
                top = 37;
                nech++;
            }
            else {
                top = 30 + 7 + 20 * nech + blockHeight * nech;
                nech++;
            }
            
        }
        else {
            top = blockHeight * ch - 60 +20*(ch-1);
            ch++;
        }
        $(this).css('top', top);

    });
$('.tenth-block .item').hover(function () {
        var numb = $(this).attr('numb');
        var elem = $('.tenth-block .numbs').find('.numb[numb='+numb+']');
        $('.tenth-block .numb').removeClass('active');
        elem.addClass('active');
    });



});

