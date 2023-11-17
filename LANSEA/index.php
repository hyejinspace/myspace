<?php
include_once $_SERVER['DOCUMENT_ROOT']."/common/html/head.html";
include_once $_SERVER['DOCUMENT_ROOT']. "/_LIB/_include/common_include.php";
include_once $_SERVER['DOCUMENT_ROOT']. "/_LIB/_include/common_include_site.php";


$subCateName[1]="까스,고로케,핫바";
$subCateName[2]="춘권피,파라타";
$subCateName[3]="육가공품";
$subCateName[4]="떡류";
$subCateName[5]="기타";

$BoardDAO       = new BoardDAO();

//신상 Item 가져오기
$form_data = null;
$form_data['pro_main_new'] = 'Y';
$mainNewItems    = $BoardDAO->selectBoardList($form_data);

//best Item 가져오기
$form_data = null;
$form_data['pro_main_best'] = 'Y';
$mainBestItems    = $BoardDAO->selectBoardList($form_data);

 //cateegory별 제품 
$form_data = null;

$cateColor[1] = "pink";
$cateColor[2] = "pink";
$cateColor[3] = "orange";
$cateColor[4] = "green";
$cateColor[5] = "gray";

?>
<body>

   <!-- header -->
    <header id="header"></header>

    <!-- nav -->
    <nav id="nav"></nav>

    <section class="main">
        <div class="visual">
            <div class="swiper-container">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide">
                        <div class="bg" style="background-image: url('/common/images/main/main-visual-bg.jpg');"></div>
                        <div class="text-wrap">
                            <h2 class="title">
                                신선한 재료를<br/>
                                고집하는 랜시푸드
                            </h2>
                            <p class="wow">
                                식품 공급에 편리함을 더하다
                            </p>
                        </div>
                    </li>
                    <li class="swiper-slide">
                        <div class="bg" style="background-image: url('/common/images/main/main-visual-bg02.jpg');"></div>
                        <div class="text-wrap">
                            <h2 class="title">
                                풍부한 맛과 <br/>
                                신선함을 전하는
                            </h2>
                            <p>신뢰할 수 있는 유통 전문기업</p>
                        </div>
                    </li>
                    <li class="swiper-slide">
                        <div class="bg" style="background-image: url('/common/images/main/main-visual-bg03.jpg');"></div>
                        <div class="text-wrap">
                            <h2 class="title">
                                맛과 품질에 <br/>
                                양보없는 기업
                            </h2>
                            <p>신선한 국내산 재료로 완성되는 랜시푸드</p>
                        </div>
                    </li>
                    <li class="swiper-slide">
                        <div class="bg" style="background-image: url('/common/images/main/main-visual-bg04.jpg');"></div>
                        <div class="text-wrap">
                            <h2 class="title">
                                믿고 먹는 <br/>
                                오랜 전통의
                            </h2>
                            <p>먹거리 전문기업 LANSEA FOOD</p>
                        </div>
                    </li>
                    <li class="swiper-slide">
                        <div class="bg" style="background-image: url('/common/images/main/main-visual-bg05.jpg');"></div>
                        <div class="text-wrap">
                            <h2 class="title">
                                식품업계의 <br/>
                                새로운 문화가 시작되는 곳
                            </h2>
                            <p>LANSEA</p>
                        </div>
                    </li>
                    <li class="swiper-slide">
                        <div class="bg" style="background-image: url('/common/images/main/main-visual-bg06.jpg');"></div>
                        <div class="text-wrap">
                            <h2 class="title">
                                국내산 재료를 사용해
                            </h2>
                            <p>풍부한 맛과 신선함을 전하는 식품 전문기업</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="slide-paging-wrap">
                <p class="swiper-pagenum">
                    <b></b> / <span></span>
                </p>
                <div class="swiper-btn-wrap">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        </div>

        <div class="section new">
            <div class="wrap">
                <div class="left">
                    <div class="inner">
                        <div class="title-text-wrap">
                            <div class="category">NEW</div>
                            <h3 class="title">
                                따끈따끈한 <span>~</span><br class="pc"/>
                                신상
                            </h3>
                            <p>
                                업데이트 된<br class="pc"/>
                                신규 제품들을 만나보세요!
                            </p>
                        </div>
                        <div class="slide-paging-wrap">
                            <div class="swiper-button-prev"></div>
                            <p class="swiper-pagenum">
                                <b></b> / <span></span>
                            </p>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
                <div class="swiper-container">
                    <ul class="swiper-wrapper">
                    <?
                        for($i = 0; $i < count($mainNewItems); $i++)
                        {
                	?>
                		<li class="swiper-slide">
                            <a href="/page/list.php?cate=<?=$mainNewItems[$i]['pro_category']?>&item=<?=$mainNewItems[$i]['pro_item']?>">
                                <div class="img"><img src="<?=$mainNewItems[$i]['pro_new_thumbnail_path']?>" alt="" class="nofull"></div>
                                <div class="tag red">NEW</div>
                                <div class="subtext size"><?=$mainNewItems[$i]['pro_weight']?> <span class="origin">(<span class="text"><?=$mainNewItems[$i]['pro_area']?></span>)</span></div>
                                <div class="title"><?=$mainNewItems[$i]['pro_title']?></div>
                                <div class="origin hide">원산지 : <span class="text"><?=$mainNewItems[$i]['pro_area']?></span></div>
                        		<div class="material hide">재료 : <span class="text"><?=$mainNewItems[$i]['pro_introduction']?></span></div>
                            </a>
                        </li>
                        <?
                        }
                        ?>                        
                    </ul>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>

        <div class="section best">
            <div class="wrap">
                <div class="title-text-wrap">
                    <div class="category">BEST</div>
                    <h3 class="title">베스트 추천</h3>
                    <p>많이 구매하신 인기제품을 지금 만나보세요!</p>
                </div>
                <div class="slide-wrap">
                    <div class="swiper-container">
                        <ul class="swiper-wrapper">
                        <?
                        for($i = 0; $i < count($mainBestItems); $i++)
                        {
                	   ?>
                	   	<li class="swiper-slide">
                                <a href="/page/list.php?cate=<?=$mainBestItems[$i]['pro_category']?>&item=<?=$mainBestItems[$i]['pro_item']?>">
                                    <div class="img"><img src="<?=$mainBestItems[$i]['pro_thumbnail_path']?>" alt=""></div>
                                    <div class="bottom information">
                                        <div class="tag-wrap">
                                            <div class="tag <?=$cateColor[$mainBestItems[$i]['cate_idx']]?>"><?=$mainBestItems[$i]['cate_name']?></div>                                            
                                        </div>
                                        <div class="title"><?=$mainBestItems[$i]['pro_title']?></div>
                                         <div class="size"><?=$mainBestItems[$i]['pro_weight']?></div>
                                        <!-- div class="size hide"><?=$mainBestItems[$i]['pro_weight']?>(<?=$mainBestItems[$i]['pro_area']?>)</div-->
                              			<div class="origin hide">원산지 : <span class="text"><?=$mainBestItems[$i]['pro_area']?></span></div>
                              			<div class="material hide">재료 : <span class="text"><?=$mainBestItems[$i]['pro_introduction']?></span></div>
                                    </div>
                                </a>
                            </li>
                            <?}?>                            
                        </ul>
                    </div>
                    <div class="swiper-pagination"></div> 
                    <div class="swiper-btn-wrap">
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section intro">
            <div class="wrap">
                <a href="/page/branch-info.html" class="box" style="background-image: url('/common/images/main/intro-office-bg.jpg');">
                    <div class="text-wrap">
                        <h4>
                            랜시푸드<br/>
                            <span>센터소개</span>
                        </h4>
                        <div class="icon"><img src="/common/images/common/plus.png" alt=""></div>
                    </div>
                </a>
                <a href="/page/brand-story.html" class="box" style="background-image: url('/common/images/main/intro-history-bg.jpg');">
                    <div class="text-wrap">
                        <h4>
                           20여년의 역사를 가진<br/>
                            <span>식품유통의 강자</span>
                        </h4>
                        <div class="icon"><img src="/common/images/common/plus.png" alt=""></div>
                    </div>
                </a>
            </div>
        </div>

        <div class="section product">
            <div class="wrap">
                <div class="title-text-wrap text-center">
                    <h3 class="title">제품소개</h3>
                    <p>다양한 제품을 한곳에서 즐기세요!</p>
                </div>
                <ul class="slide-nav">
                    <li class="on">
                        <div class="title">딤섬(튀김류)</div>
                        <div class="icon"><img src="/common/images/main/intro-product-icon01.png" alt=""></div>
                    </li>
                    <li>
                        <div class="title">딤섬(찜류)</div>
                        <div class="icon"><img src="/common/images/main/intro-product-icon02.png" alt=""></div>
                    </li>
                    <li>
                        <div class="title">피쉬볼</div>
                        <div class="icon"><img src="/common/images/main/intro-product-icon08.png" alt=""></div>
                    </li>
                    <li>
                        <div class="title">냉동과일/야채</div>
                        <div class="icon"><img src="/common/images/main/intro-product-icon04.png" alt=""></div>
                    </li>
                    <li>
                        <div class="title">기타가공품</div>
                        <div class="icon"><img src="/common/images/main/intro-product-icon07.png" alt=""></div>
                    </li>
                </ul>
                <ul class="slide-tab">
                	<? 
                	for($cate = 1; $cate <=5; $cate++)
                    {                        
                        $form_data['pro_category'] = $cate;
                        $form_data['start_num'] = 0;
                        $form_data['page_num'] = 6;
                        $form_data['order'] = " rand() ";
                        
                        $mainCateItems  = $BoardDAO->selectBoardList($form_data);
                        
                        if($cate == 1) $on = "on";
                        else $on= "";
                    ?>
                        
                    
                    <li class="product-slide0<?=$cate?> <?=$on?>">
                        <div class="bg"><img src="/common/images/main/intro-product-bg0<?=$cate?>.png" alt=""></div>
                        <div class="slide-wrap">
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-container">
                                <ul class="swiper-wrapper">
                                	<?
                                	for($i = 0; $i < count($mainCateItems); $i++){
                                	?>
                                        <li class="swiper-slide">
                                            <!-- a href="/page/list.php?cate=<?=$mainCateItems[$i]['pro_category']?>&item=<?=$mainCateItems[$i]['pro_item']?>"-->
                                                <div class="img"><img src="<?=$mainCateItems[$i]['pro_new_thumbnail_path']?>" alt=""></div>
                                                <div class="text"><?=$mainCateItems[$i]['pro_weight']?>(<?=$mainCateItems[$i]['pro_area']?>)</div>
                                                <div class="title"><?=$mainCateItems[$i]['pro_title']?></div>
                                            
                                        </li>
                                    <?}?>
                                </ul>
                            </div>
                            <div class="swiper-button-next"></div>
                        </div>
                        <div class="swiper-pagination swiper-pagination0<?=$cate?>"></div> 
                    </li>
                    <?php }?>                    
                </ul>
            </div>
        </div>

        <div class="section sns">
            <div class="wrap">
                <div class="title-text-wrap text-center">
                    <h3 class="title">랜시 SNS</h3>
                    <p>당신이 경험한 다양한 랜시푸드를 공유하세요</p>
                </div>

                <!-- sns 가져오기 -->
                <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
                <div class="elfsight-app-13f51835-9006-4689-aaa7-481e03f46c42"></div>
            </div>
        </div>

        <div class="section partner">
            <div class="wrap">
                <div class="title-text-wrap text-center">
                    <h3 class="title">맛있는 파트너</h3>
                    <p>랜시푸드와 함께 하는 맛이 통하는 파트너를 확인하세요</p>
                </div>
                <div class="partners swiper-container">
                    <ul class="swiper-wrapper pc-wrap">
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo01.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo02.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo03.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo04.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo05.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo06.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo19.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo08.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo09.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo10.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo11.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo12.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo13.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo14.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo15.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo16.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo17.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="/common/images/main/partner-logo18.jpg" alt=""></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- footer -->
    <footer id="footer"></footer>


    <!-- modal -->
   <div class="modal info">
      <div class="wrap">
         <div class="box">
            <div class="img"><img src="" alt=""></div>
            <div class="info">
               <div class="tag gray"></div>
               <div class="title"></div>
               <div class="size"></div>
               <div class="origin">원산지 : <span class="text"></span></div>
               <div class="material">재료 : <span class="text"></span></div>
            </div>
         </div>
         <button class="modal-close"></button>
      </div>
   </div>
   
    <!-- Script -->
    <script type="text/javascript" src="/common/js/wow.js"></script>
    <script src="/common/js/custom.js"></script>

    <!-- sns -->
    <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>

    <!-- 부드러운 스크롤 -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
      var sc_option = {
         // Scrolling Core
         animationTime: 400, // [ms]
         stepSize: 50, // [px]

         // Acceleration
         accelerationDelta: 50,  // 50
         accelerationMax: 3,   // 3

         // Keyboard Settings
         keyboardSupport: true,  // option
         arrowScroll: 50,    // [px]

         // Pulse (less tweakable)
         // ratio of "tail" to "acceleration"
         pulseAlgorithm: true,
         pulseScale: 4,
         pulseNormalize: 1,

         // Other
         touchpadSupport: false, // ignore touchpad by default
         fixedBackground: true,
         excluded: ''
      };
      window.SmoothScrollOptions = (sc_option);

      AOS.init({ once: true, duration: 800, offset: 250 });
   </script>
    
    <script async src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"></script>
        
</body>
</html>