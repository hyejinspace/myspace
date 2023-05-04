// Load finish animation
$(window).on('load', function(){
    $('body').addClass('on');
});

//sub function
window.addEventListener("scroll",function(){
    var icons = document.querySelector('.function');
    icons.classList.toggle('on',window.scrollY > 300);
})


setInterval(function(){
    $('.loading').hide();
}, 1450);


// 과월호 Script
$('.this_month').click(function(){
    $(this).toggleClass('on');
    $('.last_month').slideToggle();
});

$('.last_month > li > a').hover(function(){
    $('.last_month > li').removeClass('on');
});



//메인 헤더 on 일 때
function responsiveHeaderOn(){
    if($(window).width() < 992 && $('header').hasClass('on')) { 		
        document.getElementById('logo_img').src="../../../common/images/logo_left.gif";
    } else if($(window).width() > 992 && $('header').hasClass('on')) {
        document.getElementById('logo_img').src="../../../common/images/logo_sub.gif";
    }
}
//sub header 일 때
function responsiveHeaderSub() {
    if($(window).width() < 992 && $('header').hasClass('sub')) { 		
        document.getElementById('logo_img').src="../../../common/images/logo_left.gif";
    } else if($(window).width() > 992 && $('header').hasClass('sub')) {
        document.getElementById('logo_img').src="../../../common/images/logo_sub.gif";
    }
}
//main header sticky 일때
window.addEventListener("scroll",function(){
    const header = document.querySelector('header.main');
    header.classList.toggle('sticky',window.scrollY > 100);

    if($('header.main').hasClass('sticky')){
        document.getElementById('logo_img').src="../../../common/images/logo02.png";
    }else {
        document.getElementById('logo_img').src="../../../common/images/logo.png";
    }
})


$('header .menu').click(function(){
    $('nav').toggleClass('on');
    $('header').toggleClass('on');

    $('.logo > img').css('transition','all 0s')
    $('.logo::after').css('transition','all 0s')

    setTimeout(() => {
        $('.logo > img').css('transition','all 0.6s linear')
        $('.logo::after').css('transition','all 0.6s linear')
    }, 100);

    if($('nav').hasClass('on')){
        $('body').css('overflow','hidden')
    }else {
        $('body').css('overflow','auto')
    }

    if($('header').hasClass('on')){
        document.getElementById('logo_img').src="../../../common/images/logo_sub.gif";
    }else {
        document.getElementById('logo_img').src="../../../common/images/logo.png";
    }

    if($('header').hasClass('sub') || $('header').hasClass('on')){
        document.getElementById('logo_img').src="../../../common/images/logo_sub.gif";
    }else {
        $('header.sub.on .wrap .left .menu').css('background-image','url(../../../common/images/close.png');
    }

    responsiveHeaderOn()
    responsiveHeaderSub()
});

responsiveHeaderOn()
responsiveHeaderSub()


$(window).resize(function() {
	responsiveHeaderOn()
    responsiveHeaderSub()
    responsiveSubBg()
});


//sub 상단 bg 반응형
var headerVolClass = $('header.sub').attr('class');
var fileNum = headerVolClass.replace(/[^0-9]/g,'');

var sectionId = $('.crawling-contents-top').attr('id');
var pageNum = sectionId.replace(/[^0-9]/g,'');

function responsiveSubBg() {
    if($(window).width() < 1200) { 		
        $('#sub .crawling-contents-top').css('background-image','url('+'../../../page/vol'+fileNum+'/img/sub'+pageNum+'_bg_mo.jpg'+')');
    } else if($(window).width() > 1200 ) {
        $('#sub .crawling-contents-top').css('background-image','url('+'../../../page/vol'+fileNum+'/img/sub'+pageNum+'_bg.jpg'+')');
    }
}
responsiveSubBg()


//sub modal
$('.modal_btn').click(function(){
    var tabId = $(this).attr('data-id'), 
        data_num = '#' + tabId;

    $(data_num).addClass('on');
});

$('.modal_close').click(function(){
    $('.modal').removeClass('on');
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



// Animate.js
!function(a){function b(b){this.htmlElement=b,this.animations=a(this.htmlElement).attr("data-animations").split(","),this.animationIndex=0,this.lastAnimation="",void 0!==a(this.htmlElement).attr("data-animation-duration")&&(this.animationDuration=a(this.htmlElement).attr("data-animation-duration").split(",")),void 0!==a(this.htmlElement).attr("data-animation-delay")&&(this.animationDelay=a(this.htmlElement).attr("data-animation-delay").split(","))}function c(){this.elements=[],this.animateWhenVisible=!1,this.isPerformingAnimation=!1,this.resetWhenOffscreen=!1,this.repeat=!1,this.isReset=!0}function d(){this.onVisbileGroups=[],this.map=[],a(".animate-plus").addClass("animated"),a.each(a(".animate-plus"),function(d,e){var f=new b(e),g=a(e).attr("data-animation-group");void 0===g&&(g="_"+d,a(e).attr("data-animation-group",g)),void 0===this.map[g]&&(this.map[g]=new c);var h=a(e).attr("data-animation-when-visible");void 0!==h&&(this.map[g].animateWhenVisible=!0);var i=a(e).attr("data-animation-reset-offscreen");void 0!==i&&(this.map[g].resetWhenOffscreen=!0);var j=a(e).attr("data-animation-repeat");void 0!==j&&(this.map[g].repeat=!0);var k=this.map[g].elements,l=a(e).attr("data-animation-order"),m=void 0!==l;if(m)var n=l.split(",");for(var o=a(e).attr("data-animations").split(","),p=0;p<o.length;p++){var q=p+1;m&&(q=n[p]),void 0===k[q]&&(k[q]=[]),k[q].push(f)}}.bind(this)),a(window).on("scroll",function(){this.checkOnVisibleGroups()}.bind(this)),a(window).on("resize",function(){this.checkOnVisibleGroups()}.bind(this)),a(document).ready(function(){this.checkOnVisibleGroups()}.bind(this)),this.isElementVisible=function(b){var c=a(window).scrollTop(),d=a(window).height()+c-150,e=a(b).offset().top,f=a(b).height()+e;return d>=e&&f>=c},this.checkOnVisibleGroups=function(){for(var a=0;a<this.onVisbileGroups.length;a++)for(var b=this.map[this.onVisbileGroups[a]],c=1;c<b.elements.length;c++)for(var d=b.elements[c],e=0;e<d.length;e++){var f=d[e].htmlElement;this.isElementVisible(f)&&!b.isPerformingAnimation&&b.animate(1),this.isElementVisible(f)||b.isPerformingAnimation||!b.resetWhenOffscreen||b.reset()}}}jQuery.fn.redraw=function(){return this.hide(0,function(){a(this).show()})},jQuery.fn.restartAnimation=function(){var b=a(this).attr("data-animation-group"),c=d.getInstance().getMap()[b];c.restart()},b.prototype.doNextAnimation=function(b){if(this.animationIndex>=this.animations.length)return void b();var c,d;a(this.htmlElement).removeClass(this.lastAnimation),this.lastAnimation=this.animations[this.animationIndex],a(this.htmlElement).css("animation-duration","").css("-webkit-animation-duration","").css("-moz-animation-duration","").css("-ms-animation-duration","").css("-o-animation-duration",""),void 0!==this.animationDuration&&void 0!==this.animationDuration[this.animationIndex]&&(c=this.animationDuration[this.animationIndex],a(this.htmlElement).css("animation-duration",c).css("-webkit-animation-duration",c).css("-moz-animation-duration",c).css("-ms-animation-duration",c).css("-o-animation-duration",c)),a(this.htmlElement).css("animation-delay","").css("-webkit-animation-delay","").css("-moz-animation-delay","").css("-ms-animation-delay","").css("-o-animation-delay",""),void 0!==this.animationDelay&&void 0!==this.animationDelay[this.animationIndex]&&(d=this.animationDelay[this.animationIndex],a(this.htmlElement).css("animation-delay",d).css("-webkit-animation-delay",d).css("-moz-animation-delay",d).css("-ms-animation-delay",d).css("-o-animation-delay",d)),this.animationIndex++,a(this.htmlElement).redraw(),a(this.htmlElement).addClass(this.lastAnimation).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",b)},c.prototype.reset=function(){if(!this.isReset){for(var b=1;b<this.elements.length;b++)for(var c=0;c<this.elements[b].length;c++)this.elements[b][c].animationIndex=0,a(this.elements[b][c].htmlElement).removeClass(this.elements[b][c].lastAnimation);this.isReset=!0}},c.prototype.animate=function(a){var b=0,c=this.elements[a];if(void 0===c)return void(this.repeat?(this.reset(),this.animate(1)):this.isPerformingAnimation=!1);this.isPerformingAnimation=!0,this.isReset=!1;for(var d=0;d<c.length;d++)c[d].doNextAnimation(function(){b++,b==c.length&&this.animate(++a)}.bind(this))},c.prototype.restart=function(){this.isPerformingAnimation||(this.reset(),this.animate(1))},d.prototype.start=function(){for(var a in this.map)this.map.hasOwnProperty(a)&&(this.map[a].animateWhenVisible?this.registerOnVisbileMap(a):this.map[a].animate(1))},d.prototype.registerOnVisbileMap=function(a){this.onVisbileGroups.push(a)},d.prototype.getMap=function(){return this.map},d.instance=null,d.getInstance=function(){return null===d.instance&&(d.instance=new d),d.instance},a(document).ready(function(){d.getInstance().start()})}(jQuery);