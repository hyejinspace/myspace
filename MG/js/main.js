$(function(){
    // sc4 swiper
    var mainSwiper01 = new Swiper('.sc4 .swiper-container.imgSlide', {
        navigation : {
            nextEl : '.sc4 .swiper-button-next',
            prevEl : '.sc4 .swiper-button-prev',
        },
        slidesPerView: 'auto',
        spaceBetween: 0,
        // autoplay: {
        //     delay: 3000,
        // },
        autoplayDisableOnInteraction: false,
        controller: {
            control: mainSwiper02,
        },
    });
    var mainSwiper02 = new Swiper('.sc4 .swiper-container.historySlide', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        autoplayDisableOnInteraction: false,
        controller: {
            control: mainSwiper01,
        },
    });

    mainSwiper01.controller.control = mainSwiper02;
    mainSwiper02.controller.control = mainSwiper01;
    




    // sc5 swiper
    var mainSwiper03 = new Swiper('.sc5 .swiper-container.sc5Slide', {
        pagination: {
            el: '.sc5 .swiper-pagination',
            type: 'bullets',
            clickable : true
        },
        navigation : {
            nextEl : '.sc5 .swiper-button-next',
            prevEl : '.sc5 .swiper-button-prev',
        },
        paginationClickable: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        autoplayDisableOnInteraction: false,
        controller: {
            control: mainSwiper04,
        },
    });
    var mainSwiper04 = new Swiper('.sc5 .swiper-container.sc5Slide02', {
        paginationClickable: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 3000,
        },
        loop: true,
        autoplayDisableOnInteraction: false,
        controller: {
            control: mainSwiper03,
        },
    });

    mainSwiper03.controller.control = mainSwiper04;
    mainSwiper04.controller.control = mainSwiper03;
    



    $('.sc5 .swiper-play').click(function(){
        $(this).toggleClass('on')

        if ($(this).hasClass('on')) {
            mainSwiper03.autoplay.stop();
        }
        else {
            mainSwiper03.autoplay.start();
        }
    })
})