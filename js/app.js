$(function(){
    $('header .btnWrap button').on('click',function(){
        var pageNum = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $('.page').eq(pageNum).addClass('on').siblings().removeClass('on');
    })
})