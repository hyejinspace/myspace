
$('.open').click(function(){
    $('nav').addClass('on');
})
$('.close').click(function(){
    $('nav').removeClass('on');
})

$('.function #share').click(function(){
    $('.function .share_list').toggleClass('on');
});

//외부 클릭시 nav닫히기
$('nav').click(function(e){
    if( !$('nav').has(e.target).length === true ){
        $('nav').removeClass('on');
    }
});