// YouTube API
var myPlayer;        
myPlayer = $("#bgVideo").YTPlayer({
    useOnMobile: true,
    mobileFallbackImage: "",
});


// SWIPER
var swiperArr1 = [];
var swiperObject1 = $(".sub_swiper");
var swiperCount1 = swiperObject1.length;

for (var i = 0; i < swiperCount1; i++) {

    var swiper_container = swiperObject1.eq(i).find(".swiper-container");
    var swiper_prevButton = swiperObject1.eq(i).find(".swiper-button-prev");
    var swiper_nextButton = swiperObject1.eq(i).find(".swiper-button-next");
    var swiper_pagenation = swiperObject1.eq(i).find(".swiper-pagination");

    swiperArr1[i] = new Swiper(swiper_container, {
        prevButton: swiper_prevButton,
        nextButton: swiper_nextButton,
        pagination: swiper_pagenation,
        paginationType: 'fraction',
        slidesPerView: 'auto',
        spaceBetween: 80,
        autoplay: 4000,
        loop: true,
        autoplayDisableOnInteraction: false,
    }); 

    swiper_container.attr('data-stop', i);
}

$('.sub_swiper .swiper-slide').mouseover(function(){
    var Stop = $(this).closest('.swiper-container').attr('data-stop');
    swiperArr1[Stop].stopAutoplay();
});

$('.sub_swiper .swiper-slide').mouseout(function(){
    var start = $(this).closest('.swiper-container').attr('data-stop');
    swiperArr1[start].startAutoplay();
});


var floatingSwiper = new Swiper('.floating .banner .swiper-container', {
    pagination: '.floating .swiper-pagination',
    paginationType: 'bullets',
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 0,
    autoplay: 4000,
    loop: true,
    autoplayDisableOnInteraction: false,
});


//nav
$('header .wrap .nav_btn').click(function(){
    $('nav').addClass('on')
})
$('nav .wrap .inner .close').click(function(){
    $('nav').removeClass('on')
})


// nav 이전호보기 버튼
$('nav .viewPast').click(function(){
    $(this).toggleClass('on');
});


//sub contents_top height
var win_h = $(window).height()
var win_w = $(window).width()
$('#crawling-contents-top.setHeight').css('height',win_h)


// 과월호보기 Swiper
var LastSwiper = new Swiper('.past_swiper .swiper-container', {
    prevButton: '.past_swiper .swiper-prev',
    nextButton: '.past_swiper .swiper-next',
    slidesPerView: 'auto',
    spaceBetween: 0,
    // autoplay: 3000,
    // loop: true,
});


//메인 영상 팝업
// $('#section3 .more_btn').on('click',function(){
//     $('.popup.video').addClass('on')
//     $('.videoContent').get(0).play()
// })
// $('.popup.video').click(function(){
//     $('.videoContent').get(0).pause()
// });


//팝업 외부 클릭시 닫힘
$('.popup').on('click', function(e) {
    if (!$('.popup .wrap').has(e.target).length == 1) {
        $('.popup').removeClass('on');
        $('.popup .wrap .videoContent source').attr('src', '');
    }
});
//팝업 닫기버튼
$('.popup_close').on('click', function(e) {
    $('.popup').removeClass('on');
    $('.popup .wrap .videoContent source').attr('src', '');
});


//비디오 팝업
// let viewerVideoButtons = document.querySelectorAll('.video_play_btn');
// let viewerPopup = document.querySelector('.popup');
// let viewerVideo = document.querySelector('.popup .videoContent');
// let viewerVideoSrc = document.querySelector('.popup .videoContent source');
// let viewerVideoClose = document.querySelector('.popup popup_close');
// // 버튼영역 클릭시
// viewerVideoButtons.forEach( (viewerVideoButton) => {
//     viewerVideoButton.addEventListener('click', function(){
//         var VideoID = this.getAttribute('data-video')
//         var VideoURL = '../img/' + VideoID + '.mp4'
//         viewerPopup.classList.add('on')
//         viewerVideoSrc.setAttribute('src', VideoURL);
//         viewerVideo.load();
//         viewerVideo.play();
//     })
// });
// $('.popup .wrap .videoContent source').attr('src', '');


//서브 floating
$(function(){
    var body_h = $(document).outerHeight();
    var footer_h = $('footer').outerHeight();
    var floating_h = $('.floating .wrap').height();
    var guideLine01 = $('.sub .textbox').eq(0).offset().top;
    var guideLine02 = body_h - footer_h - floating_h - 200
    

    function floatingBox(){
        var body_h = $(document).outerHeight();
        var footer_h = $('footer').outerHeight();
        var floating_h = $('.floating .wrap').height();
        var guideLine01 = $('.sub  .textbox').eq(0).offset().top;
        var guideLine02 = body_h - footer_h - floating_h - 200
        var scroll_t = $(window).scrollTop();

        if(scroll_t >= guideLine01 - 100){
            $('.floating').addClass('on');
            if(scroll_t >= guideLine02){
                $('.floating').removeClass('on');
            }
        }else{
            $('.floating').removeClass('on');
        }

        if($('.floating').hasClass('on')){
            $('.floating').css('top', '100px');
        }else{
            $('.floating').css('top', guideLine01);
            if(scroll_t >= guideLine02){
                $('.floating').removeClass('on');
                $('.floating').css('top', guideLine02 + 110);
            }
        }
    }
    floatingBox();
    $(window).scroll(function(){
        floatingBox();
    })
    $(window).resize(function(){
        $('.floating').css('top', guideLine01 );
        var scroll_t = $(window).scrollTop();
        floatingBox();
    })
})



//드림 Q&A
$('.dream_qna .input_wrap .enter').click(function(){
    $('.form_toggle').show()
})


//별점
$('.dream_qna .rating li').click(function(){
    var li = ('.dream_qna .rating li')
    var rate_num = $(this).index() + 1; 

    if(rate_num == 1){
        $(li).eq(0).addClass('on')
        $(li).eq(1).removeClass('on')
        $(li).eq(2).removeClass('on')
        $(li).eq(3).removeClass('on')
        $(li).eq(4).removeClass('on')
    }else if(rate_num == 2){
        $(li).eq(0).addClass('on')
        $(li).eq(1).addClass('on')
        $(li).eq(2).removeClass('on')
        $(li).eq(3).removeClass('on')
        $(li).eq(4).removeClass('on')
    }else if(rate_num == 3){
        $(li).eq(0).addClass('on')
        $(li).eq(1).addClass('on')
        $(li).eq(2).addClass('on')
        $(li).eq(3).removeClass('on')
        $(li).eq(4).removeClass('on')
    }else if(rate_num == 4){
        $(li).eq(0).addClass('on')
        $(li).eq(1).addClass('on')
        $(li).eq(2).addClass('on')
        $(li).eq(3).addClass('on')
        $(li).eq(4).removeClass('on')
    }else if(rate_num == 5){
        $(li).eq(0).addClass('on')
        $(li).eq(1).addClass('on')
        $(li).eq(2).addClass('on')
        $(li).eq(3).addClass('on')
        $(li).eq(4).addClass('on')
    }
})



//view slide
var swiperArr2 = [];
var swiperObject2 = $(".view_slider");
var swiperCount2 = swiperObject2.length;

for (var i = 0; i < swiperCount2; i++) {

    var swiper_container = swiperObject2.eq(i).find(".swiper-container");
    var swiper_prevButton = swiperObject2.eq(i).find(".swiper-button-prev");
    var swiper_nextButton = swiperObject2.eq(i).find(".swiper-button-next");
    var swiper_pagenation = swiperObject2.eq(i).find(".swiper-pagination");

    swiperArr2[i] = new Swiper(swiper_container, {
        prevButton: swiper_prevButton,
        nextButton: swiper_nextButton,
        pagination: swiper_pagenation,
        slidesPerView: 'auto',
        spaceBetween: 0,
        autoplay: 4000,
        loop: true,
        autoplayDisableOnInteraction: false,
    }); 

    swiper_container.attr('data-stop', i);
}

$('.view_slider .swiper-slide').mouseover(function(){
    var Stop = $(this).closest('.swiper-container').attr('data-stop');
    swiperArr2[Stop].stopAutoplay();
});

$('.view_slider .swiper-slide').mouseout(function(){
    var start = $(this).closest('.swiper-container').attr('data-stop');
    swiperArr2[start].startAutoplay();
});


//find_event

$('.find_img').click(function(){
    $('.find_input').show();
});

$('.find_event .close').click(function(){
    $('.find_event').hide();
});
$('.find_close').click(function(){
    $('.find_event').hide();
});



//animation
!function(a){function b(b){this.htmlElement=b,this.animations=a(this.htmlElement).attr("data-animations").split(","),this.animationIndex=0,this.lastAnimation="",void 0!==a(this.htmlElement).attr("data-animation-duration")&&(this.animationDuration=a(this.htmlElement).attr("data-animation-duration").split(",")),void 0!==a(this.htmlElement).attr("data-animation-delay")&&(this.animationDelay=a(this.htmlElement).attr("data-animation-delay").split(","))}function c(){this.elements=[],this.animateWhenVisible=!1,this.isPerformingAnimation=!1,this.resetWhenOffscreen=!1,this.repeat=!1,this.isReset=!0}function d(){this.onVisbileGroups=[],this.map=[],a(".animate-plus").addClass("animated"),a.each(a(".animate-plus"),function(d,e){var f=new b(e),g=a(e).attr("data-animation-group");void 0===g&&(g="_"+d,a(e).attr("data-animation-group",g)),void 0===this.map[g]&&(this.map[g]=new c);var h=a(e).attr("data-animation-when-visible");void 0!==h&&(this.map[g].animateWhenVisible=!0);var i=a(e).attr("data-animation-reset-offscreen");void 0!==i&&(this.map[g].resetWhenOffscreen=!0);var j=a(e).attr("data-animation-repeat");void 0!==j&&(this.map[g].repeat=!0);var k=this.map[g].elements,l=a(e).attr("data-animation-order"),m=void 0!==l;if(m)var n=l.split(",");for(var o=a(e).attr("data-animations").split(","),p=0;p<o.length;p++){var q=p+1;m&&(q=n[p]),void 0===k[q]&&(k[q]=[]),k[q].push(f)}}.bind(this)),a(window).on("scroll",function(){this.checkOnVisibleGroups()}.bind(this)),a(window).on("resize",function(){this.checkOnVisibleGroups()}.bind(this)),a(document).ready(function(){this.checkOnVisibleGroups()}.bind(this)),this.isElementVisible=function(b){var c=a(window).scrollTop(),d=a(window).height()+c,e=a(b).offset().top,f=a(b).height()+e;return d>=e&&f>=c},this.checkOnVisibleGroups=function(){for(var a=0;a<this.onVisbileGroups.length;a++)for(var b=this.map[this.onVisbileGroups[a]],c=1;c<b.elements.length;c++)for(var d=b.elements[c],e=0;e<d.length;e++){var f=d[e].htmlElement;this.isElementVisible(f)&&!b.isPerformingAnimation&&b.animate(1),this.isElementVisible(f)||b.isPerformingAnimation||!b.resetWhenOffscreen||b.reset()}}}jQuery.fn.redraw=function(){return this.hide(0,function(){a(this).show()})},jQuery.fn.restartAnimation=function(){var b=a(this).attr("data-animation-group"),c=d.getInstance().getMap()[b];c.restart()},b.prototype.doNextAnimation=function(b){if(this.animationIndex>=this.animations.length)return void b();var c,d;a(this.htmlElement).removeClass(this.lastAnimation),this.lastAnimation=this.animations[this.animationIndex],a(this.htmlElement).css("animation-duration","").css("-webkit-animation-duration","").css("-moz-animation-duration","").css("-ms-animation-duration","").css("-o-animation-duration",""),void 0!==this.animationDuration&&void 0!==this.animationDuration[this.animationIndex]&&(c=this.animationDuration[this.animationIndex],a(this.htmlElement).css("animation-duration",c).css("-webkit-animation-duration",c).css("-moz-animation-duration",c).css("-ms-animation-duration",c).css("-o-animation-duration",c)),a(this.htmlElement).css("animation-delay","").css("-webkit-animation-delay","").css("-moz-animation-delay","").css("-ms-animation-delay","").css("-o-animation-delay",""),void 0!==this.animationDelay&&void 0!==this.animationDelay[this.animationIndex]&&(d=this.animationDelay[this.animationIndex],a(this.htmlElement).css("animation-delay",d).css("-webkit-animation-delay",d).css("-moz-animation-delay",d).css("-ms-animation-delay",d).css("-o-animation-delay",d)),this.animationIndex++,a(this.htmlElement).redraw(),a(this.htmlElement).addClass(this.lastAnimation).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",b)},c.prototype.reset=function(){if(!this.isReset){for(var b=1;b<this.elements.length;b++)for(var c=0;c<this.elements[b].length;c++)this.elements[b][c].animationIndex=0,a(this.elements[b][c].htmlElement).removeClass(this.elements[b][c].lastAnimation);this.isReset=!0}},c.prototype.animate=function(a){var b=0,c=this.elements[a];if(void 0===c)return void(this.repeat?(this.reset(),this.animate(1)):this.isPerformingAnimation=!1);this.isPerformingAnimation=!0,this.isReset=!1;for(var d=0;d<c.length;d++)c[d].doNextAnimation(function(){b++,b==c.length&&this.animate(++a)}.bind(this))},c.prototype.restart=function(){this.isPerformingAnimation||(this.reset(),this.animate(1))},d.prototype.start=function(){for(var a in this.map)this.map.hasOwnProperty(a)&&(this.map[a].animateWhenVisible?this.registerOnVisbileMap(a):this.map[a].animate(1))},d.prototype.registerOnVisbileMap=function(a){this.onVisbileGroups.push(a)},d.prototype.getMap=function(){return this.map},d.instance=null,d.getInstance=function(){return null===d.instance&&(d.instance=new d),d.instance},a(document).ready(function(){d.getInstance().start()})}(jQuery);