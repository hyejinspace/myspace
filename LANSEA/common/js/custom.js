$(function(){
    //animation
    new WOW().init();

    
    // header 불러오기
    let $header = $("#header");
    let $nav = $("#nav");
    let $footer = $("#footer");

    $header.load("/common/html/header.html", function () {
        let $nav = $("#nav");
        let $navBtn = $(".nav-btn");

        $navBtn.on("click", function () {
            $(this).toggleClass('on');
            $nav.toggleClass('on');
        })

        window.addEventListener("scroll",function(){
            const header = document.querySelector('header');
            header.classList.toggle('on',window.scrollY > 500);
        })
    });

    //nav 불러오기
    $nav.load("/common/html/nav.html", function () {

        $('nav .gnb-title').on('click',function(){
            if($(window).width() <= 1024){
                if($(this).siblings('.lnb').css('display') == 'block'){
                    $(this).removeClass('on');
                    $(this).siblings('.lnb').stop().slideUp();
                }else{
                    $(this).addClass('on');
                    $(this).siblings('.lnb').stop().slideDown();
                }
            }else if($(window).width() > 1024){
                
            }
        })

        //sharePopup 외부 클릭시 닫힘
        $('nav').on('click', function(e) {
            if (!$('nav .wrap').has(e.target).length == 1) {
                $('nav').removeClass('on');
            }
        });

        $(window).on('resize', function () {
            if($(window).width() <= 1024){

            }else if($(window).width() > 1024){
                $('nav .lnb').show();
            }
        })
    })

    //footeer 불러오기
    $footer.load("/common/html/footer.html", function () {

    })



    var slideLength = $('.visual .swiper-container .swiper-slide').length;
    //메인 슬라이드
    var mainSlide = new Swiper('.visual .swiper-container', {
        slidesPerView: 'auto',
        loop: true,
        effect : 'fade',
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.visual .swiper-pagination',
            clickable: true,
        },
        navigation : {
            nextEl : '.visual .swiper-button-next', 
            prevEl : '.visual .swiper-button-prev', 
        },
    });
    mainSlide.on('transitionEnd', function() {
        var slideNum = mainSlide.realIndex + 1
        $('.visual .swiper-pagenum b').text('0' + slideNum);
        $('.visual .swiper-pagenum span').text('0' + slideLength);
    });
    var slideNum = mainSlide.realIndex + 1
    $('.visual .swiper-pagenum b').text('0' + slideNum);
    $('.visual .swiper-pagenum span').text('0' + slideLength);


    var newSlideLength = $('.section.new .swiper-container .swiper-slide').length
    // section.new 슬라이드
    var mainSlideNew = new Swiper('.section.new .swiper-container', {
        slidesPerView: 'auto',
        loop: true,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.section.new .swiper-pagination',
            clickable: true,
            type: "progressbar",
        },
        navigation : {
            nextEl : '.section.new .swiper-button-next', 
            prevEl : '.section.new .swiper-button-prev', 
        },
    });
    mainSlideNew.on('transitionEnd', function() {
        var newSlideNum = mainSlideNew.realIndex + 1
        $('.section.new .swiper-pagenum b').text(newSlideNum);
        $('.section.new .swiper-pagenum span').text(newSlideLength);
    });
    var newSlideNum = mainSlideNew.realIndex + 1
    $('.section.new .swiper-pagenum b').text(newSlideNum);
    $('.section.new .swiper-pagenum span').text(newSlideLength);


    // section.best 슬라이드
    var mainSlideBest = new Swiper('.section.best .swiper-container', {
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.section.best .swiper-pagination',
            clickable: true,
            type : 'bullets',
        },
        navigation : {
            nextEl : '.section.best .swiper-button-next', 
            prevEl : '.section.best .swiper-button-prev', 
        },
    });
    


    // section.product product-slide01 슬라이드
    var mainSlideProduct01 = new Swiper('.section.product .product-slide01 .swiper-container', {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.section.product .product-slide01 .swiper-pagination01',
            clickable: true,
            type : 'bullets',
        },
        navigation : {
            nextEl : '.section.product .product-slide01 .swiper-button-next', 
            prevEl : '.section.product .product-slide01 .swiper-button-prev', 
        },
        initiialSlide: 1,
        observer: true, 
        observeParents: true,
        slidesPerView: 5,
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
        }
    });

    var mainSlideProduct02 = new Swiper('.section.product .product-slide02 .swiper-container', {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.section.product .product-slide02 .swiper-pagination02',
            clickable: true,
            type : 'bullets',
        },
        navigation : {
            nextEl : '.section.product .product-slide02 .swiper-button-next', 
            prevEl : '.section.product .product-slide02 .swiper-button-prev', 
        },
        initiialSlide: 1,
        observer: true, 
        observeParents: true,
        slidesPerView: 5,
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
        }
    });

    var mainSlideProduct03 = new Swiper('.section.product .product-slide03 .swiper-container', {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.section.product .product-slide03 .swiper-pagination03',
            clickable: true,
            type : 'bullets',
        },
        navigation : {
            nextEl : '.section.product .product-slide03 .swiper-button-next', 
            prevEl : '.section.product .product-slide03 .swiper-button-prev', 
        },
        initiialSlide: 1,
        observer: true, 
        observeParents: true,
        slidesPerView: 5,
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
        }
    });

    var mainSlideProduct04 = new Swiper('.section.product .product-slide04 .swiper-container', {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.section.product .product-slide04 .swiper-pagination04',
            clickable: true,
            type : 'bullets',
        },
        navigation : {
            nextEl : '.section.product .product-slide04 .swiper-button-next', 
            prevEl : '.section.product .product-slide04 .swiper-button-prev', 
        },
        initiialSlide: 1,
        observer: true, 
        observeParents: true,
        slidesPerView: 5,
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
        }
    });

    var mainSlideProduct05 = new Swiper('.section.product .product-slide05 .swiper-container', {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.section.product .product-slide05 .swiper-pagination05',
            clickable: true,
            type : 'bullets',
        },
        navigation : {
            nextEl : '.section.product .product-slide05 .swiper-button-next', 
            prevEl : '.section.product .product-slide05 .swiper-button-prev', 
        },
        initiialSlide: 1,
        observer: true, 
        observeParents: true,
        slidesPerView: 5,
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
        }
    });

    $('.slide-nav >li').on('click',function(){
        let tabNum = $(this).index();
        $(this).addClass('on').siblings().removeClass();
        $('.slide-tab >li').eq(tabNum).addClass('on').siblings().removeClass('on');
    })



    //메인 모달
    $('.modal .modal-close').on('click',function(e){
        $('.modal.info').fadeOut()
    })

   
    //신상
    $('.section.new .swiper-slide a').on('click',function(e){
        e.preventDefault();

        $('.modal.info').fadeIn();
        

        //클릭시 텍스트 넣기
        var new_ImgLink = $(this).find('.img img').attr('src');
        var new_Img_class = $(this).find('.img img').attr("class");
        var new_tag = $(this).find('.tag').html();
        var new_tag_class = $(this).find('.tag').attr("class");
        var new_title = $(this).find('.title').html();
        var new_size = $(this).find('.size').html();
        var new_origin = $(this).find('.origin .text').html();
        var new_material = $(this).find('.material').html();
        $('.modal.info .img img').attr('src',new_ImgLink).removeClass().addClass(new_Img_class);
        $('.modal.info .info .tag').html(new_tag);
        $('.modal.info .info .tag').removeClass().addClass(new_tag_class);
        $('.modal.info .info .title').html(new_title);
        $('.modal.info .info .size').html(new_size);
        $('.modal.info .info .origin .text').html(new_origin);
        $('.modal.info .info .material').html(new_material);
    })

    //베스트
    $('.section.best .swiper-slide a').on('click',function(e){
        e.preventDefault();

        $('.modal.info').fadeIn();

        //클릭시 텍스트 넣기
        var best_ImgLink = $(this).find('.img img').attr('src');
        var best_tag = $(this).find('.information .tag-wrap .tag').html();
        var best_tag_class = $(this).find('.information .tag').attr("class");
        var best_title = $(this).find('.information .title').html();
        var best_size = $(this).find('.information .size').html();
        var best_origin = $(this).find('.information .origin .text').html();
        var best_material = $(this).find('.information .material').html();
        $('.modal.info .img img').attr('src',best_ImgLink).removeClass();
        $('.modal.info .info .tag').html(best_tag);
        $('.modal.info .info .tag').removeClass().addClass(best_tag_class);
        $('.modal.info .info .title').html(best_title);
        $('.modal.info .info .size').html(best_size);
        $('.modal.info .info .origin .text').html(best_origin);
        $('.modal.info .info .material').html(best_material);
    })

})
