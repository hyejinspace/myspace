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

    $('nav .gnb > li').on('mouseover',function(){
        if($('nav').hasClass('on') == false){
            $(this).children('.lnb').stop().slideDown(300)
        }
    })
    $('nav .gnb > li').on('mouseleave',function(){
        if($('nav').hasClass('on') == false){
            $(this).children('.lnb').stop().slideUp(300)
        }
    })
    $(window).on('resize',function(){
        $('nav .gnb > li').on('mouseover',function(){
            if($('nav').hasClass('on') == false){
                $(this).children('.lnb').stop().slideDown(300)
            }
        })
        $('nav .gnb > li').on('mouseleave',function(){
            if($('nav').hasClass('on') == false){
                $(this).children('.lnb').stop().slideUp(300)
            }
        })
    })


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
        

        $(window).on('resize',function(){
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
        })

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
        if($(window).width() < 1200){
            $('header .logo img').attr("src", $('header .logo img').attr("data-color"));
        }else{
            $('header .logo img').attr("src", $('header .logo img').attr("data-white"));
        }
        $(window).on('resize',function(){
            if($(window).width() < 1200){
                $('header .logo img').attr("src", $('header .logo img').attr("data-color"));
                
            }else{
                $('header .logo img').attr("src", $('header .logo img').attr("data-white"));
            }
        })
    }

    
})



