<?
include_once $_SERVER['DOCUMENT_ROOT']. "/_LIB/_include/common_include.php";
include_once $_SERVER['DOCUMENT_ROOT']. "/_LIB/_include/common_include_site.php";
include_once $_SERVER['DOCUMENT_ROOT']."/_DAO/site/class_NewWebzineDAO.php";
include_once $_SERVER['DOCUMENT_ROOT']."/common/html/initData.php";

//Click Kospo 리스트 
$form_data['page_type'] = "main";
$NewsResult = $WebzineDAO->selectNewsList($form_data);  
$proIndex = 0;
$vodIndex = 1;
for($i = 1; $i < count($pageResult); $i++) 
{
    if(($pageResult[$i]['vol_menu_idx'] >= 13 &&  $pageResult[$i]['vol_menu_idx'] <= 18) || $pageResult[$i]['vol_menu_idx'] == 28 || $pageResult[$i]['vol_menu_idx'] == 29) //남전 프로
    {
        $arrProList[$proIndex]['vol_idx'] = $pageResult[$i]['vol_idx'];
        $arrProList[$proIndex]['vol_thumbnail_path'] = $pageResult[$i]['vol_thumbnail_path'];
        $arrProList[$proIndex]['vol_menu_name'] = $pageResult[$i]['vol_menu_name'];
        $arrProList[$proIndex]['vol_title'] = $pageResult[$i]['vol_title'];
        $arrProList[$proIndex]['vol_sub_title'] = $pageResult[$i]['vol_sub_title'];
        $arrProList[$proIndex]['vol_introduction'] = $pageResult[$i]['vol_introduction'];
        $proIndex++;         
    }
}

?>
<?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/new_head.php";?>
<meta property="og:image" content="https://kospomagazine.co.kr/page/vol131/img/main_vol131_og_1.jpg"/>
<body>
    <?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/header/Header_".$form_data['vol_volume'].".php";?>
    <!-- Section -->
   <section class="main" id="fullpage">
        <ul id="Pagenation">
            <li data-menuanchor="anchor1"><a href="#anchor1">편성프로</a></li>
            <li data-menuanchor="anchor2"><a href="#anchor2">Click KOSPO</a></li>
            <li data-menuanchor="anchor3"><a href="#anchor3">교양프로</a></li>
            <li data-menuanchor="anchor3"><a href="#anchor3">남전프로</a></li>
            <li data-menuanchor="anchor4"><a href="#anchor4">예능프로</a></li>
        </ul>       
		  <div class="section fp-auto-height" id="section0" style="background-image: url('/page/vol131/img/section01.jpg'); background-position-x: 100%; background-position-y: 100%; overflow: hidden;">
            <a href="/page/<?=$form_data['vol_volume']?>/view.php?idx=<?=$pageResult[0]['vol_idx']?>" class="wrap">
                <div class="animate">
                    <span>
                        <img src="/page/vol131/img/section01_mo.jpg" alt="" class="section01_00_mo">
                        <img src="/page/vol131/img/section01_title_mo.png" alt="" class="layer_title_mo">
                        <img src="/page/vol131/img/section01_layer01.gif" alt="" class="layer01">
                        <img src="/page/vol131/img/section01_layer01_mo.png" alt="" class="layer01 layer01_mo">
                        <img src="/page/vol131/img/section01_layer02.gif" alt="" class="layer02">
                        <img src="/page/vol131/img/section01_layer02_mo.png" alt="" class="layer02 layer02_mo">
                    </span>
                </div>
                <div class="text" style="height: 692px;">
                    <h2>
                        <img src="/page/vol131/img/section01_title.png" alt="" class="title">
                        <span><b style="color: #000;">요리부터 청소까지!<br/>남자들의 주부생활</b></span>
                    </h2>                    
                </div>
            </a>
        </div>
        <div class="section" id="section1">
            <div class="category">
                <div class="title">
                    <img src="/common/images/2022_icon01.png" alt="Click K.OSPO">
                    <h2>Click KOSPO</h2>
                </div>
                <ul class="gnb">
                    <li class="home"><a href="#anchor1"><i class="fas fa-home"></i></a></li>
                    <li class="on"><a href="#anchor2"></a></li>
                    <li><a href="#anchor3"></a></li>
                    <li><a href="#anchor4"></a></li>
                </ul>
            </div>
            <div class="contents">
                <div class="top">
                    <a href="board_view.php?idx=<?=$NewsResult[0]['vol_idx']?>" class="img">
                        <img src="<?=$NewsResult[0]['vol_thumbnail_path']?>" alt="">
                    </a>
                    <div class="text">
                        <h3><?=$NewsResult[0]['vol_title']?></h3>
                        <p><?=$NewsResult[0]['vol_introduction']?></p>
                        <a href="board_view.php?idx=<?=$NewsResult[0]['vol_idx']?>">더보기<span>+</span></a>
                    </div>
                </div>
                <div class="bottom">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                        	<? for($i = 1; $i < count($NewsResult); $i++) { ?>
                            <a href="board_view.php?idx=<?=$NewsResult[$i]['vol_idx']?>" class="swiper-slide">
                                <img src="<?=$NewsResult[$i]['vol_thumbnail_path']?>" alt="">
                                <p><?=$NewsResult[$i]['vol_title']?></p>
                            </a>                           
                            <?}?>
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        </div>
        <div class="section" id="section2" style="background-image: url('/page/<?=$form_data['vol_volume']?>/img/section02.jpg');">
            <div class="category">
                <div class="title">
                    <img src="/common/images/2022_icon02.png" alt="테마가 있는 하루">
                    <h2>남전 · 교양프로</h2>
                </div>
                <ul class="gnb">
                    <li class="home"><a href="#anchor1"><i class="fas fa-home"></i></a></li>
                    <li><a href="#anchor2"></a></li>
                    <li class="on"><a href="#anchor3"></a></li>
                    <li><a href="#anchor4"></a></li>
                </ul>
            </div>
            <div class="contents">
                <h3 class="title">남 프로들을 위한 다양한 프로그램<br/><b>오늘 뭐보지?</b></h3>
                <div class="bottom">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">                        
                        	<? for($i = 0; $i < count($arrProList); $i++) {?>                        	 
                            <a href="view.php?idx=<?=$arrProList[$i]['vol_idx']?>" class="swiper-slide">
                                <div class="img">
                                    <img src="<?=$arrProList[$i]['vol_thumbnail_path']?>" alt="">
                                </div>
                                <div class="text">                                	
                                    <span><?=$arrProList[$i]['vol_menu_name']?></span>
                                    <h4><?=$arrProList[$i]['vol_title']?></h4>
                                    <?=$arrProList[$i]['vol_sub_title']?>                               
                                    <p><?=$arrProList[$i]['vol_introduction']?></p>
                                </div>
                            </a>
                            <?}?>                                                        
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        </div>
         <div class="section" id="section3">
            <div class="category">
                <div class="title">
                    <img src="/common/images/2022_icon03.png" alt="예능프로">
                    <h2>예능프로</h2>
                </div>
                <ul class="gnb">
                    <li class="home"><a href="#anchor1"><i class="fas fa-home"></i></a></li>
                    <li><a href="#anchor2"></a></li>
                    <li><a href="#anchor3"></a></li>
                    <li class="on"><a href="#anchor4"></a></li>
                </ul>
            </div>
            <div class="contents">
                <div class="wrap">
                    <div class="left">
                        <!-- 영상 URL : data-id -->
                        <div class="video Youtube" data-youtube="GeXSCZZDHWY">
                            <img src="/page/vol131/img/thum03_00.jpg" alt="">
                        </div>
                        <a href="/page/<?=$form_data['vol_volume']?>/view.php?idx=<?=$pageResult[9]['vol_idx']?>" class="text">
                            <h3>가을 닮은 쉼표 하나, <br/><b> 마음속에 그리다! </b></h3>
                            <span>평창풍력발전단지 주변 소상공인을 만나다</span>
                            <p>가을색이 짙어졌다. 햇살에도 바람에도 풍경에도 농후한 빛깔과 향이 생겼다. 평창 육백마지기에서 굽이굽이 아름다운 산세를 내려다보고 맛있는 한 끼 식사와 휴식이 깃든 차 한 잔과 함께한다면 이 가을이 몹시 행복해질 것이다. 이 무렵 우리에겐 마음속에 쉼표 하나 그려 넣을 수 있는 시간이 필요하다. </p>
                        </a>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                            	<div class="swiper-slide">
                                    <div class="img Youtube" data-youtube="4OO5AeMarbY">
                                        <img src="/page/vol131/img/thum03_07.jpg" alt="">
                                    </div>
                                    <p class="text">영월과 함께한 빛나는 역사,<br/>영월빛드림본부</p>
                                </div>
                                <div class="swiper-slide">
                                    <div class="img Youtube" data-youtube="xDG_bmJude8">
                                        <img src="/page/vol131/img/thum03_06.jpg" alt="">
                                    </div>
                                    <p class="text">선선한 가을바람 타고 <br/>울산의 맛을 즐겨봐<br/>KOSPO영남파워 주변 소상공인을 만나다</p>
                                </div>
                               <div class="swiper-slide">
                                    <div class="img Youtube" data-youtube="Q73sIdLiCSs">
                                        <img src="/page/vol130/img/thum03_07.jpg" alt="">
                                    </div>
                                    <p class="text">‘프로는 프로답게’ 우리는 프로니까 <br/> 하동빛드림본부</p>
                                </div>
                                <div class="swiper-slide">
                                    <div class="img Youtube" data-youtube="cGWX7_PA09Y">
                                        <img src="/page/vol130/img/thum03_06.jpg" alt="">
                                    </div>
                                    <p class="text">대구의 새로운 맛집 지도, <br/> 궁금하지 않나요?<br/>대구그린파워 주변 소상공인을 만나다</p>
                                </div>
                                <div class="swiper-slide">
                                    <div class="img Youtube" data-youtube="pj09Bda8F-E">
                                        <img src="/page/vol130/img/thum03_05.jpg" alt="">
                                    </div>
                                    <p class="text">최강 신인천! 2050 탄소중립 달성에 다가서다<br/>신인천빛드림본부</p>
                                </div>
                                <div class="swiper-slide">
                                    <div class="img Youtube" data-youtube="bc85t1JjpTg">
                                        <img src="/page/vol130/img/thum03_04.jpg" alt="">
                                    </div>
                                    <p class="text">안동빛드림본부라서 행복해요</p>
                                </div>
                                <div class="swiper-slide">
                                    <div class="img Youtube" data-youtube="iSci4_hQPkU">
                                        <img src="/page/vol130/img/thum03_03.jpg" alt="">
                                    </div>
                                    <p class="text">그렇습니다,<br /> 맛의 결정체입니다</p>
                                </div>
                                <!-- div class="swiper-slide">
                                    <div class="img Youtube" data-youtube="EPyfFgcXI70">
                                        <img src="/page/vol130/img/thum03_02.jpg" alt="">
                                    </div>
                                    <p class="text">모두가 바다를 품고 있는<br />삼척빛드림본부</p>
                                </div>
                                <div class="swiper-slide">
                                    <div class="img Youtube" data-youtube="ZWTjL7UwmL4">
                                        <img src="/page/vol130/img/thum03_01.jpg" alt="">
                                    </div>
                                    <p class="text">안동빛드림본부 우당탕탕 그 자체</p>
                                </div-->
                            </div>
                        </div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section fp-auto-height" id="section4">
            <div class="category">
                <ul class="gnb">
                    <li class="home"><a href="#anchor1"><i class="fas fa-home"></i></a></li>
                    <li><a href="#anchor2"></a></li>
                    <li><a href="#anchor3"></a></li>
                    <li><a href="#anchor4"></a></li>
                </ul>
            </div>
            <div class="contents">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="text">
                               <p class="subtitle">KOSPO 이벤트</p>
                                <h4 class="title">
                                    &lt;KOSPO FAMILY&gt;와 함께하는
                                    <b>미로 찾기 게임</b>
                                </h4>
                            </div>
                            <a href="/page/<?=$form_data['vol_volume']?>/event.php" class="img">
                                <img src="/page/<?=$form_data['vol_volume']?>/img/thum04_01.png" alt="">
                                <img src="/page/<?=$form_data['vol_volume']?>/img/thum04_01_mo.png" alt="" class="mo">
                            </a>
                        </div>
                        <!-- div class="swiper-slide">
                            <div class="text">
                                <p class="subtitle">KOSPO 챌린지</p>
                                <h4 class="title">
                                    1인1감탄 챌린지 
                                    <b>남부는 감탄해!</b>
                                </h4>
                            </div>
                            <a href="/page/<?=$form_data['vol_volume']?>/view.php?idx=<?=$pageResult[2]['vol_idx']?>" class="img">
                                <img src="/page/<?=$form_data['vol_volume']?>/img/thum04_02.png" alt="">
                                <img src="/page/<?=$form_data['vol_volume']?>/img/thum04_02_mo.png" alt="" class="mo">
                            </a>
                        </div-->
                    </div>
                    <!-- div class="swiper-pagination"></div-->
                </div>
                <a href="#anchor1" class="btn-top"><img src="/common/images/2022_function07.png" alt="TOP"></a>
            </div>
        </div>
    </section>
    
    <?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/new_footer.php";?>
     <button class="btn-top"><img src="/common/images/2022_function07.png" alt="TOP"></button>
    <!-- 팝업 -->
    <div class="popup">
        <div class="wrap video">
            <div class="video_wrap">
            	<button class="video_close"><span>닫기</span></button>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AtysAatN1oc?autoplay=1&mute=1" autoplay="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    
    <!-- Script(Main) -->
    <script type="text/javascript" src="/common/js/jquery.fullPage.js"></script>    
    <!-- Script(공통) -->
    <script type="text/javascript" src="/common/js/swiper.jquery.min.js" ></script>
    <script type="text/javascript" src="/common/js/2022_app.js"></script>

    <!-- Script(Main) -->
    <script>
    $(document).ready(function(){
        $('#Pagenation > li > a').css('color','#333333');
        $('.main #section1 .swiper-slide').height($('.main #section1 .swiper-slide').width());

        $('#fullpage').fullpage({
            verticalCentered: true,
            anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
            menu: '#Pagenation',
            responsiveWidth: 1365.99,
            // afterLoad: function(){
            //     if($('#section0').hasClass('active')){
            //         $('#Pagenation > li > a').css('color','#333333');
            //     }
            //     else{
            //         $('#Pagenation > li > a').css('color','#b2b2b2');
            //     }
			// },
        });

        var swiper1 = new Swiper('#section1 .swiper-container', {
            nextButton: '#section1 .swiper-button-next', 
            slidesPerView: 'auto',
            spaceBetween: 0,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            // loop: true,
        });

        var swiper2 = new Swiper('#section2 .swiper-container', {
            nextButton: '#section2 .swiper-button-next', 
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 'auto',
            spaceBetween: 0,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            loop: true,
            breakpointsInverse: true,
            breakpoints: { 
                1365: {
                    centeredSlides: true,
                }
            },
        });

        var container = $('#section3 .swiper-container');
        var slide = $('#section3 .swiper-slide');
        var multiplier = 1;
    
        function setContainerHeight (source, target, multiplier) {
            target.height(source.outerHeight(true) * multiplier - 1);
        }

        var swiper3 = new Swiper('#section3 .swiper-container', {
            nextButton: '#section3 .swiper-button-next', 
            direction: 'vertical',
            slidesPerView: 'auto',
            autoHeight: true,
            loop: true,
            autoplay: 3000,
            breakpointsInverse: true,
            breakpoints: { 
                1365: {
                    direction: 'horizontal',
                }
            },
        });

        setContainerHeight(slide, container, 3);

        var swiper4 = new Swiper('#section4 .swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: function (swiper, index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
            slidesPerView: 'auto',
            spaceBetween: 0,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            loop: true,
            effect: 'fade'
        });
    

        $(window).on('load', function(){
            setContainerHeight(slide, container, 3);
            $('.main #section2 .swiper-slide').css('min-height', $('.main #section2 .swiper-wrapper').height());
        });

        $(window).on('resize', function(){
            setContainerHeight(slide, container, 3);
            $('.main #section2 .swiper-slide').css('min-height', $('.main #section2 .swiper-wrapper').height());
        });

        $('.btn-top').click(function(){
            $('html').scrollTop(0);
        });

        // Youtube 팝업
        $('.popup .video .video_wrap iframe').attr('src', '');

        $('.popup').click(function(){
            $(this).removeClass('on');
            $('.popup .video .video_wrap iframe').attr('src', '');
        });

        $('.Youtube').click(function(){
            var VideoID = $(this).attr('data-youtube'),
                VideoURL = 'https://www.youtube.com/embed/' + VideoID + '?autoplay=1&mute=1'

            $('.popup').addClass('on');
            $('.popup .video .video_wrap iframe').attr('src', VideoURL);
        });

        //vol129에만 적용
        setTimeout(function() {
            $('.layer04').addClass('on')
            $('.layer05').addClass('on')
        }, 1000);
    });
    </script>
</body>
</html>