function Share(){
    $('.share').addClass('on');
}


$(document).ready(function(){
    $('header .btn_menu').click(function(){
        $('nav').addClass('on');

        if($('nav').hasClass('on') == true){
            $('html').css('overflow','hidden');
        }else{
            $('html').css('overflow','auto');
        };
    });

    $('nav .btn_close').click(function(){
        $('nav').removeClass('on');
        if($('nav').hasClass('on') == true){
            $('html').css('overflow','hidden');
        }else{
            $('html').css('overflow','auto');
        };
    });

    $('.search').click(function(){
        $(this).hide();
    });
    $('.search .wrap').click(function(e){
        e.stopPropagation();
    });

    $('.share, .share .close').click(function (){
        $('.share').removeClass('on');
    });
    $('.share .top, .share .bottom').click(function(e){
        e.stopPropagation();
    });


    //main swiper
    var Swiper1 = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        autoHeight: true,
        autoplay: 3000,
        loop: true,
        autoplayDisableOnInteraction: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
    });
});