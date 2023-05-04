$(function(){
    //anchor
    $('.history .num01').addClass('on')
    if($(window).width() < 1200){
        $('.history_nav .num01').addClass('on_mo')
    }

    $(window).on('scroll', function () {
        let scrollTop = $(window).scrollTop()

        var sc2_anchor = $('.history .sc2').offset().top
        var sc3_anchor = $('.history .sc3').offset().top
        var sc4_anchor = $('.history .sc4').offset().top
        var sc5_anchor = $('.history .sc5').offset().top

        if(sc2_anchor <= scrollTop){
            $('.history_nav .num02').addClass('on')
            if($(window).width() < 1200){
                $('.history_nav .num02').addClass('on_mo').siblings().removeClass('on_mo')
            }
        }else{
            $('.history_nav .num01').addClass('on_mo')
            $('.history_nav .num02').removeClass('on')
            $('.history_nav .num02').removeClass('on_mo')
        }

        if(sc3_anchor <= scrollTop){
            $('.history_nav .num03').addClass('on')
            if($(window).width() < 1200){
                $('.history_nav .num03').addClass('on_mo').siblings().removeClass('on_mo')
            }
        }else{
            $('.history_nav .num03').removeClass('on')
            $('.history_nav .num03').removeClass('on_mo')
        }

        if(sc4_anchor - 100 <= scrollTop){
            $('.history_nav .num04').addClass('on')
            if($(window).width() < 1200){
                $('.history_nav .num04').addClass('on_mo').siblings().removeClass('on_mo')
            }
        }else{
            $('.history_nav .num04').removeClass('on')
            $('.history_nav .num04').removeClass('on_mo')
        }

        if(sc5_anchor - 100 <= scrollTop){
            $('.history_nav .num05').addClass('on')
            if($(window).width() < 1200){
                $('.history_nav .num05').addClass('on_mo').siblings().removeClass('on_mo')
            }
        }else{
            $('.history_nav .num05').removeClass('on')
            $('.history_nav .num05').removeClass('on_mo')
        }


        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        var sc1_bar = $(".history_nav .num01 .sc1_bar span")
        var sc2_bar = $(".history_nav .num02 .sc2_bar span")
        var sc3_bar = $(".history_nav .num03 .sc3_bar span")
        var sc4_bar = $(".history_nav .num04 .sc4_bar span")

        var sc_Height1 = $('.history .sc1').outerHeight()
        var sc_Height2 = $('.history .sc2').outerHeight()
        var sc_Height3 = $('.history .sc3').outerHeight() 
        var sc_Height4 = $('.history .sc4').outerHeight() + $('.history .sc5').outerHeight()

        //첫번째 섹션
        var scrolled1 = (winScroll / sc_Height1) * 100;
        sc1_bar.css('height', scrolled1 + '%')

        if(scrolled1 = 100){
            //두번째 섹션
            var winScroll2 = winScroll - sc_Height1
            var scrolled2 = (winScroll2 / sc_Height2) * 100;
            sc2_bar.css('height', scrolled2 + '%')

            //세번째 섹션
            if(scrolled2 = 100){
                var winScroll3 = winScroll2 - sc_Height2
                var scrolled3 = (winScroll3 / sc_Height3) * 100;
                sc3_bar.css('height', scrolled3 + '%')
            }else{
                sc3_bar.css('height', '0px')
                sc4_bar.css('height', '0px')
            }
        }else{
            sc2_bar.css('height', '0px')
            sc3_bar.css('height', '0px')
            sc4_bar.css('height', '0px')
        }

    })


    //intro 에니메이션
    $(function(){
        $('html').css('overflow','hidden')
        $('.history_intro').addClass('on')

        //숫자 에니메이션
        setTimeout(() => {
            var el = document.querySelector('.year');
            od = new Odometer({
                el: el,
                value: 1963,
                format: '',
                duration: 3000
            });
            od.update(2023)
        
        }, 1500);

        //intro 끝나고 텍스트 숨기기
        setTimeout(() => {
            $('.history_intro.on .inner > span .year, .history_intro.on .inner').css('opacity','0')
            $('.history_intro.on .inner > span .year, .history_intro.on .inner').css('transition','0.3s')
        }, 3800);

        //intro 끝나고 숨기기
        setTimeout(() => {
            $('.history_intro').hide()
            $('html').css('overflow','auto')
        }, 5200);
        
        //sc1 텍스트 animation
        setTimeout(() => {
            $('.history .sc1').addClass('on')
        }, 4500);
    })

    //intro 배경 svg
    const path = document.querySelector('.path');

    function lerp(start, end, t){
        return start * (1 - t) + end * t;
    }
    let toggle = true;
    let y = 0;
    let c = 0;
    function animate(){
        setTimeout(() => {
            if(toggle){
                y = lerp(y, 100 , 0.065).toFixed(3);
                c = lerp(c, 100 , 0.085).toFixed(3);
                path.setAttribute('d',`M 0 ${y} L 0 100 100 100 100 ${y} C 50 ${c}, 50 ${c}, 0 ${y}`);
            }
        }, 4000);
        requestAnimationFrame(animate)
    }
    animate()


    //sc2 이미지 슬라이드
    var swiperPart2 = new Swiper(".swiperPart", {
        spaceBetween: 'auto',
        // slidesPerView: 1,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 3000,
        },
    });


    //sc3 obj 스크롤 에니메이션
    $(window).scroll(function(){
        let calc_scrollTop = $(window).scrollTop()/5;

        $('.history .sc3 .obj01').css({'transform':'translateY(' + -calc_scrollTop/8 + 'px)'})
        $('.history .sc3 .obj02').css({'transform':'translateY(' + calc_scrollTop/5 + 'px)'})
        $('.history .sc3 .obj03').css({'transform':'translateY(' + -calc_scrollTop/13 + 'px)'})
        $('.history .sc3 .obj04').css({'transform':'translateY(' + calc_scrollTop/10 + 'px)'})
        $('.history .sc3 .obj05').css({'transform':'translateY(' + -calc_scrollTop/10 + 'px)'})

        // console.log(window.scrollY)
    });


    //sc3 슬라이드
    var historySwiper01 = new Swiper('.history .swiper-container.imgSlide', {
        navigation : {
            nextEl : '.history .sc3 .swiper-button-next',
            prevEl : '.history .sc3 .swiper-button-prev',
        },
        slidesPerView: 'auto',
        spaceBetween: 20,
        // autoplay: {
        //     delay: 3000,
        // },
        autoplayDisableOnInteraction: false,
        controller: {
            control: historySwiper02,
        },
    });
    var historySwiper02 = new Swiper('.history .swiper-container.historySlide', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        autoplayDisableOnInteraction: false,
        controller: {
            control: historySwiper01,
        },
    });
    historySwiper01.controller.control = historySwiper02;
    historySwiper02.controller.control = historySwiper01;

})