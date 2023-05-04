$(function(){

    //네비게이션 버튼
    function navBtn(){
        if($(window).width() < 1024){
            $(document).on('click','.menuBtn',function(e){
                $('nav').addClass('on')
            })
            //네비게이션 외부 클릭시 닫힘
            $(document).on('click','nav',function(e) {
                if (!$('nav ul').is(e.target)) {
                    $('nav').removeClass('on');
                }
            });
        }
    }
    navBtn();
    $(window).on('resize',function(){
        navBtn();
    })


    //프로필 follow 버튼
    $(document).on('click', '.follow', function(){
        $(this).toggleClass('on')
    })



    //like 버튼
    $(document).on('click','button.like',function(){
        $(this).toggleClass('on')
    })



    //댓글 펼치기 버튼
    $(document).on('click','.commentOpen',function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on')
            $(this).text('댓글 펼치기');
        }else{
            $(this).addClass('on')
            $(this).text('댓글 접기');
        }
    })



    //콘텐츠 상세옵션
    $(document).on('click','.statistics .FuncBtn', function(){
        $('.Popup').removeClass('on')
        $(this).siblings('.musicFuncPopup').toggleClass('on')
    })
    $(document).on('mouseleave','.musicFuncPopup', function(){
        $(this).removeClass('on')
    })
    //콘텐츠 상세옵션 외부 클릭시 닫힘
    $(document).on('click','body', function(e){
        var $tgPoint = $(e.target);
        var $popCallBtn = $tgPoint.hasClass('FuncBtn')
        var $popArea = $tgPoint.hasClass('musicFuncPopup')
     
        if ( !$popCallBtn && !$popArea ) {
            $('.musicFuncPopup').removeClass('on');
        }
    });
    
    //댓글 상세옵션
    $(document).on('click','.comment .FuncWrap .FuncBtn',function(){
        $('.Popup').removeClass('on')
        $(this).siblings('.FuncPopup').toggleClass('on')
    })
    $('.FuncPopup').on('mouseleave',function(){
        $(this).removeClass('on')
    })
    //댓글 상세옵션 외부 클릭시 닫힘
    $(document).on('click','body', function(e){
        var $tgPoint = $(e.target);
        var $popCallBtn = $tgPoint.hasClass('FuncBtn')
        var $popArea = $tgPoint.hasClass('FuncPopup')
     
        if ( !$popCallBtn && !$popArea ) {
            $('.FuncPopup').removeClass('on');
        }
    });



    //프로필 상세옵션
    $(document).on('click','.profile .FuncBtn .btnWrap',function(e){
        $('.Popup').removeClass('on')
        $(this).parent().toggleClass('on')
    })
    //프로필 상세옵션 외부 클릭시 닫힘
    $(document).on('click','.profile .FuncBtn', function(e) {
        if (!$('.profile .FuncBtn .btnWrap').is(e.target)) {
            $('.profile .FuncBtn').removeClass('on');
        }
    });



    //노래 재생 버튼
    $(document).on('click','.playBtn',function(){
        if($(this).hasClass('playing') == false){
            $('.playBtn').removeClass('playing')
            $('.playerPopup').removeClass('on')

            $(this).addClass('playing')
            $('.playerPopup').addClass('on')
        }else{
            $('.playBtn').removeClass('playing')
            $('.playerPopup').removeClass('on')

            $(this).removeClass('playing')
            $('.playerPopup').removeClass('on')
        }
    })


    //서브 본문 더보기 버튼
    $(document).on('click','.sub .showMore',function(){
        if($(this).parent().hasClass('on')){
            $(this).parent().removeClass('on')
            $(this).text('더보기');
        }else{
            $(this).parent().addClass('on')
            $(this).text('접기');
        }
    })
    

    //플레이버튼들 스크립트
    $(document).on('click','.playerPopup .play',function(){
        $(this).toggleClass('playing')
    })
    $(document).on('click','.playerPopup .sound .soundBtn',function(){
        $(this).toggleClass('on')
    })
    $(document).on('click','.playerPopup .close',function(){
        $(this).parent().removeClass('on')
        $('.playerPopup .play').removeClass('playing')
        $('.playerPopup .sound .soundBtn').removeClass('on')
        $('.playBtn').removeClass('playing')
    })

    $(document).on('input','#soundRange', function(){
        var val = $(this).val();
        $(this).css('background', 'linear-gradient(to right, #8B82FF 0%, #8B82FF '+ val +'%, rgba(255, 255, 255, 0.3) ' + val + '%, rgba(255, 255, 255, 0.3) 100%)');
    });



    //댓글 클릭
    var commentNumBtn = $('.functionWrap .statistics .commentNum')

    $(document).on('click','.functionWrap .statistics .commentNum', function(){
        $(this).toggleClass('on')

        var commentBtn = $(this).parent().parent().siblings('.commentWrap').children('.commentOpen')
        
        commentBtn.toggleClass('on')

        if(commentBtn.hasClass('on')){
            commentBtn.text('댓글 접기');
        }else{
            commentBtn.text('댓글 펼치기');
        }
    })


    //검색 페이지 스와이퍼
    var searchSwiperUser = new Swiper(".contentsArea.searchPage .userSlide .swiper-container", {
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev"
        // },
        spaceBetween: 0, 
        slidesPerView: "auto",
        mousewheel: false,
        autoplay: {
            delay: 4000,
        },
        // loop: true,
        pagination: { 
            el: ".contentsArea.searchPage .userSlide .swiper-pagination",
            clickable: true,
        },
        // observer: true,	
        // observeParents: true,
        // touchRatio: 0,
        // preventClicksPropagation: false,
        // preventClicks: false,
        // simulateTouch: false,
    });


    //검색결과 더보기
    $(document).on('click','.serchResultMore',function(){
        $(this).toggleClass('on').siblings().removeClass('on')
    })


    //로딩화면 스크립트========================================
    setTimeout(() => {
        $('.loading').fadeOut()
    }, 2000);

})
