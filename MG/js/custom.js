//사업보도
$(function () {
    //첫 로딩시 애니메이션 효과
    let businessReport = $(".sub_businessReport");
    let businessReportContent = $(".businessReport_content>ul>li");

    setTimeout(() => {
        businessReport.addClass("on");
    }, 100);

    setTimeout(() => {
        businessReportContent.css({ 'transition-delay': "0s" });
    }, 1000);
    //첫 로딩시 애니메이션 끝

    // 커스텀 select 시작
    let selectFlag;
    $('.custom-select').on('click', function () {
        $(this).toggleClass('selected');
        if ($(this).hasClass('selected')) {
            $('.custom-select-list').show();
        } else {
            $('.custom-select-list').hide();
        }
    })

    $('.custom-select').on('focusin', function () {
        $('.custom-select-list').show();
    });

    $('.custom-select').on('focusout', function () {
        if (!selectFlag) {
            $('.custom-select-list').hide();
        }
        $(this).removeClass('selected');
    });

    $('.custom-select-option').on('mouseenter', function () {
        selectFlag = true;
    });

    $('.custom-select-option').on('mouseout', function () {
        selectFlag = false;
    });

    $('.custom-select-option').on('click', function () {
        let value = $(this).attr('value');

        $('.custom-select-text').text($(this).text());
        $('.select-origin').val(value);
        $('.custom-select-list').hide();

        $('.select-origin').find('option').each(function (index, el) {
            if ($(el).attr('value') == value) {
                $(el).attr('selected', 'selected');
            } else {
                $(el).removeAttr('selected');
            }
        });
    });

    //커스텀 select 끝

})

//ceo 스와이퍼 슬라이드
$(function () {
    var mySwiper2 = new Swiper(".congrats_slide .swiper-container", {
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev"
        // },
        spaceBetween: 0, 
        slidesPerView: "auto",
        mousewheel: false,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        pagination: { 
            el: ".congrats_slide .swiper-pagination",
            type : 'progressbar',
        }
    });

})


//이벤트 및 공모전, 금고소식 스와이퍼
$(function () {
    var mySwiper = new Swiper(".main_swiper-container", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        spaceBetween: 0, 
        slidesPerView: "auto",
        mousewheel: false,
        autoplay: {
            delay: 3000,
        },
    });

})

//사업소개
$(function () {
    let BusinessList = $(".sub_introductionBusiness .inner>.contents>li");
    let baseLine = -650;

    $(window).on("scroll", function () {
        let scroll = $(this).scrollTop();

        for (let i = 0; i < BusinessList.length; i++) {
            if(scroll >= BusinessList.eq(i).offset().top + baseLine ) {
                BusinessList.eq(i).addClass("on");
            }
        }

    })

    $('.sub_introductionBusiness .conNav .wrap ul li').on('click',function(){
        $(this).addClass('on').siblings().removeClass('on');
    })

})