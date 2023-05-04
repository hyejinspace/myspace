
// sub01 ============================================================

//팝업
$('.modal .close').click(function(){
    $('.modal').css('display','none')
})

//탭키
$('.sub01 .container .wrap .tab01').click(function(){
    $(this).addClass('active');
    $('.sub01 .container .wrap .tab02').removeClass('active');
    $('.sub01 .container .wrap .con01').addClass('active');
    $('.sub01 .container .wrap .con02').removeClass('active');
})
$('.sub01 .container .wrap .tab02').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.sub01 .container .wrap .con02').addClass('active');
    $('.sub01 .container .wrap .con01').removeClass('active');
})

//인수증 접수하기
$('.sub01 .con01submit').click(function(){
    $('.sub01 .con01 .form').css('display','block');
    $('.sub01 .con01 .receipt_form').css('display','block');
    $('.sub01 .con01 .receipt_contents').css('display','none');

    var sub01FormOffset = $(".sub01 .con01 .form").offset();
    $('html').animate({scrollTop : sub01FormOffset.top - $('header').height()}, 300);
})

//인수증 접수 공모요강
$('.sub01 .con01 .inform01').click(function(){
    $('.sub01 .con01 .form').css('display','none');
    $('.sub01 .con01 .receipt_contents').css('display','block');
    $('.sub01 .con01 .receipt_form').css('display','none');

    var sub01ConOffset = $('.sub01 .con01 .receipt_contents').offset();
    $('html').animate({scrollTop : sub01ConOffset.top - $('header').height()}, 300);
})

//사진 공모전 접수하기
$('.sub01 .con02submit').click(function(){
    $('.sub01 .con02 .form').css('display','block');
    $('.sub01 .con02 .photo_form').css('display','block');
    $('.sub01 .con02 .photo_contents').css('display','none');
    $('.sub01 .con02 .receipt_check_form').css('display','none');

    var sub02FormOffset = $(".sub01 .con02 .photo_form").offset();
    $('html').animate({scrollTop : sub02FormOffset.top - $('header').height()}, 300);
})

//사진 공모전 접수확인 버튼
$('.sub01 .receipt_check_btn').click(function(){
    $('.sub01 .con02 .form').css('display','block');
    $('.sub01 .con02 .receipt_check_form').css('display','block');
    $('.sub01 .con02 .photo_form').css('display','none');
    $('.sub01 .con02 .photo_contents').css('display','none');

    var sub02ReceiptCheckOffset = $('.sub01 .con02 .receipt_check_form').offset();
    $('html').animate({scrollTop : sub02ReceiptCheckOffset.top - $('header').height()}, 300);
})

//사진 공모전 공모요강
$('.sub01 .con02 .inform02').click(function(){
    $('.sub01 .con02 .form').css('display','block');
    $('.sub01 .con02 .photo_contents').css('display','block');
    $('.sub01 .con02 .photo_form').css('display','none');
    $('.sub01 .con02 .receipt_check_form').css('display','none');

    var sub02ConOffset = $('.sub01 .con02 .photo_contents').offset();
    $('html').animate({scrollTop : sub02ConOffset.top - $('header').height()}, 300);
})

