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

//이벤트 및 공모전, 금고소식 스와이퍼
$(function () {
    var swiper = new Swiper(".main_swiper-container", { //전체 프레임 선택자
        direction: "horizontal", //슬라이딩 방향
        loop: false, //순환가능
        spaceBetween: 0, //패널간의 간격
        slidesPerView: "auto", //한 프레임에 복수개 패널 보임
        slidesPerGroup: 1,
        speed: 1000, //슬라이딩 속도,
        mousewheel: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        autoplay: {
            delay: 2000,
        },
    });
})

//사업소개
$(function () {
    let BusinessList = $(".sub_introductionBusiness .inner>ul>li");
    let baseLine = -650;

    $(window).on("scroll", function () {
        let scroll = $(this).scrollTop();

        for (let i = 0; i < BusinessList.length; i++) {
            if(scroll >= BusinessList.eq(i).offset().top + baseLine ) {
                BusinessList.eq(i).addClass("on");
            }
        }

    })
})