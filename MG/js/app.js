
$(function(){

    //nav
    $('header .menu').on('click',function(){
        if($('.menu').hasClass('on')){
            $('nav').removeClass('on')
            $('nav .gnb > li .lnb').css('display','none')
            $('header').removeClass('on')
            $('header .menu').removeClass('on')
            $('html,body').css('overflow','auto')
            $('nav .gnb').removeClass('on')
            if($(window).scrollTop() > 100){
                $('header').addClass('scroll')
            }
        }else {
            $('nav').addClass('on')
            $('nav .gnb > li .lnb').css('display','block')
            $('header').addClass('on')
            $('header').removeClass('scroll')
            $('header .menu').addClass('on')
            $('html,body').css('overflow','hidden')
            setTimeout(() => {
                $('nav .gnb').addClass('on')
            }, 10);
        }
    })


    //mg축제 lnb 
    function paNav(){
        $('nav .gnb > li').on('mouseover',function(){
            if($('nav').hasClass('on') == false){
                $(this).children('.lnb').show()
            }
        })
        if($('nav').hasClass('on') == false){
            $('nav .gnb > li .lnb > li h3').on('click',function(){
                $(this).siblings('ul').toggleClass('on')
                $(this).toggleClass('on')
            })
            $('nav .gnb > li .lnb > li').on('mouseleave',function(){
                $(this).siblings('ul').removeClass('on')
                $(this).removeClass('on')
            })
        }

        $('nav .gnb > li').on('mouseleave',function(){
            if($('nav').hasClass('on') == false){
                $(this).children('.lnb').hide()
                
                $('nav .gnb > li .lnb > li h3').siblings('ul').removeClass('on')
                $('nav .gnb > li .lnb > li h3').removeClass('on')
            }
        })
    }
    paNav();


    //header
    if($('header').hasClass('on') == false){
        let lastScrollY = 0;
        $(window).on('scroll', function () {
            const scrollY = window.scrollY;
            
            if(scrollY <= 0){
                $('header').removeClass('hide')
            }else if(scrollY < lastScrollY){ //스크롤 올릴때
                $('header').removeClass('hide')
            }else if(scrollY > lastScrollY && scrollY > 0){ //스크롤 내릴때
                $('header').addClass('hide')
            }

            lastScrollY = scrollY;
        });

        //호버시 로고 컬러
        function hoverLogoColor(){
            if($(window).width() > 1200){
                $('header').on('mouseover',function(){
                    $('header .logo img').attr("src", $('header .logo img').attr("data-color"));
                })
                $('header').on('mouseout',function(){
                    $('header .logo img').attr("src", $('header .logo img').attr("data-white"));
                    if($(window).scrollTop() > 100){
                        $('header .logo img').attr("src", $('header .logo img').attr("data-color"));
                    }
                })
            }else{
                $('header').on('mouseout',function(){
                    $('header .logo img').attr("src", $('header .logo img').attr("data-color"));
                })
            }
        }
        hoverLogoColor();
        

        //스크롤시 로고 컬러
        $(window).on('scroll', function () {
            if($(window).scrollTop() > 100){
                $('header').addClass('scroll')
                $('header .logo img').attr("src", $('header .logo img').attr("data-color"));
            }else{
                $('header').removeClass('scroll')
                $('header .logo img').attr("src", $('header .logo img').attr("data-white"));
                if($(window).width() < 1200){
                    $('header .logo img').attr("src", $('header .logo img').attr("data-color"));
                }else{
                    $('header .logo img').attr("src", $('header .logo img').attr("data-white"));
                }
            }
        })

        //화면 크기별 로고 컬러
        function wSizeLogoColor(){
            if($(window).width() < 1200){
                $('header .logo img').attr("src", $('header .logo img').attr("data-color"));
            }else{
                $('header .logo img').attr("src", $('header .logo img').attr("data-white"));
            }
        }
        wSizeLogoColor();



        $(window).on('resize',function(){
            paNav();
            hoverLogoColor();
            wSizeLogoColor();
        })
    }


    //메인 sc2 영상 팝업
    $('.sc2').on('click',function(){
        $('.popup.sc2Video').addClass('on')
    })
    $('.popup').click(function(){
        $(this).removeClass('on');
    });



    // 비디오 링크 받아오기 - 메인
    $('.popup .video .video_wrap iframe').attr('src', '');

    $('.popup').click(function(){
        $(this).removeClass('on');
        $('.popup .video .video_wrap iframe').attr('src', '');
    });
    $('.sc2 .video').click(function(){
        var VideoID = $(this).attr('data-youtube'),
            VideoURL = 'https://www.youtube.com/embed/' + VideoID + '?autoplay=1&mute=1'

        $('.popup').addClass('on');
        $('.popup .video .video_wrap iframe').attr('src', VideoURL);
    });


    // 비디오 링크 받아오기 - sub_video 페이지
    // $('.sub_video .videoWrap iframe').attr('src', '');
    $('.sub_video .list li').click(function(){
        $('.sub_video .videoWrap iframe').attr('src', '');
    });

    $('.sub_video .list li').click(function(){
        $('html, body').animate({scrollTop : $('.sub_video .videoWrap').offset().top - 100},50);


        var VideoID = $(this).attr('data-youtube'),
            VideoURL = 'https://www.youtube.com/embed/' + VideoID + '?autoplay=1&mute=1'

        $('.sub_video .videoWrap iframe').attr('src', VideoURL);
    });


    //pc,모바일용 이미지 변경 스크립트
    function imgReplace(){
        $("img").each(function(){
            if( $(window).width() < 769 ){
                $(this).attr("src", $(this).attr("data-mo-src"));
            } else {
                $(this).attr("src", $(this).attr("data-pc-src"));
            }
        });
    }
    imgReplace();
    $(window).resize(function(){
        imgReplace();
    });
    
})



