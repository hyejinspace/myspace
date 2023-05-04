//main animation
$(document).ready(function(){
    $('.text_wrap').addClass('on');
});


//menu
$('.menu').click(function(){
    $('nav').show();
    $('body,html').css('overflow','hidden');
});
$('nav button').click(function(){
    $('nav').hide();
    $('body,html').css('overflow','visible');
});


//share
$('.sns').click(function(){
    $('.function ul').toggleClass('on');
})


//modal
$('.banner').click(function(){
    $('.modal').css('display','block');
    $('.modal').addClass('on');
});

if($('.modal').hasClass('on') === true){
    $('html,body').css('overflow-y','hidden');
}

$('.modal .close').click(function(){
    $('.modal').css('display','none');
});

// $('.send').click(function(){
//     $('.modal').css('display','none');
// });

//swiper (공통)
var Swiper3 = new Swiper('.information.renewal .swiper03', {
    pagination: '.swiper03 .swiper-pagination',
    paginationClickable: true,
    slidesPerView: '1',
    spaceBetween: 0,
    autoHeight: true,
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
    loop: true,
});
