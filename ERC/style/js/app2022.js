$(document).ready(function(){
    $( window ).resize( function() {
        if($('#mainContent').hasClass('renewal')){
            $('#headerSet .wrap').css('width','1190px');
            $('#footerSet .wrap').css('width','1190px');
        };

        if($('#mainContent').hasClass('renewal') && $(window).width() <= 1320){
            $('#headerSet .wrap').css('width','auto');
            $('#headerSet .wrap').css('padding','0 20px');
            $('#footerSet .wrap').css('width','auto');
            $('#footerSet .wrap').css('padding','0 20px');
        };
    });
    

    // section01
    var swiper1txt = new Swiper('.section01 .swiper1txt', {
        pagination: '.section01 .swiper-pagination',
        slidesPerView: 'auto',
        spaceBetween: 0,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true,
    });
    var swiper1img = new Swiper('.section01 .swiper1img', {
        slidesPerView: 'auto',
        autoHeight: true,
        // autoplay: 3000,
        loop: true,
        breakpoints: {
            768: {
                centeredSlides: true,
            }
        }
    });
    $('.section01 .swiper-button-next').click(function(){
        swiper1txt.slideNext();
    });
    $('.section01 .swiper-button-prev').click(function(){
        swiper1txt.slidePrev();
    });
    swiper1txt.params.control = swiper1img;
    swiper1img.params.control = swiper1txt;


    // section02
    var swiper2 = new Swiper(".section02 .swiper-container", {
        pagination: '.section02 .swiper-pagination',
        paginationType: 'progress',
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        autoplay: 3000,
        loop: true,
        autoplayDisableOnInteraction: false,
        initialSlide: 1,
        // mousewheelControl: true,
        onSlideChangeEnd : function(swiper2) {
            $('.section02 .swiper-pagenum b').text(swiper2.realIndex + 1);
            $('.section02 .swiper-pagenum span').text(swiper2.slides.length / 3);
        },
        breakpoints: {
            1200: {
                initialSlide: 0,
            }
        }
    });
    $('.section02 .swiper-pagenum b').text(swiper2.realIndex + 1);
    $('.section02 .swiper-pagenum span').text(swiper2.slides.length / 3);

    $('.section02 .swiper-button-next').click(function(){
        swiper2.slideNext();
    });
    $('.section02 .swiper-button-prev').click(function(){
        swiper2.slidePrev();
    });

    // section03
    var swiper3 = new Swiper(".section03 .swiper-container", {
        pagination: '.section03 .swiper-pagination',
        paginationType: 'progress',
        slidesPerView: 'auto',
        spaceBetween: 0,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true,
        // mousewheelControl: true,
        onSlideChangeEnd : function(swiper3) {
            $('.section03 .swiper-pagenum b').text(swiper3.realIndex + 1);
            $('.section03 .swiper-pagenum span').text(swiper3.slides.length / 3);
        },
    });
    $('.section03 .swiper-button-next').click(function(){
        swiper3.slideNext();
    });
    $('.section03 .swiper-button-prev').click(function(){
        swiper3.slidePrev();
    });

    // section04
    var swiper4 = new Swiper(".section04 .swiper-container", {
        pagination: '.section04 .swiper-pagination',
        paginationType: 'progress',
        slidesPerView: 'auto',
        spaceBetween: 0,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true,
        // mousewheelControl: true,
        onSlideChangeEnd : function(swiper4) {
            $('.section04 .swiper-pagenum b').text(swiper4.realIndex + 1);
            $('.section04 .swiper-pagenum span').text(swiper4.slides.length / 3);
        }
    });
    $('.section04 .swiper-button-next').click(function(){
        swiper4.slideNext();
    });
    $('.section04 .swiper-button-prev').click(function(){
        swiper4.slidePrev();
    });

    // section05
    var swiper5 = new Swiper('.section05 .swiper-container', {
        pagination: '.section05 .swiper-pagination',
        slidesPerView: 'auto',
        spaceBetween: 0,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true,
    });


})