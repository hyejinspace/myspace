<?php
include_once $_SERVER['DOCUMENT_ROOT']."/common/html/head.html";
include_once $_SERVER['DOCUMENT_ROOT']. "/_LIB/_include/common_include.php";
include_once $_SERVER['DOCUMENT_ROOT']. "/_LIB/_include/common_include_site.php";


$page = isset($_GET['page']) && !empty($_GET['page']) ? $_GET['page'] : 1;
$form_data['cate']    = isset($_GET['cate']) && !empty($_GET['cate']) ? $_GET['cate'] : "";
$form_data['item']    = isset($_GET['item']) && !empty($_GET['item']) ? $_GET['item'] : "";


if($form_data['cate'] != "" && !is_numeric($form_data['cate']))
{
    $msg = "잘못된 요청정보 입니다";
    Util::alertMsgHistoryBack($msg);
}


if($form_data['item'] != "" && !is_numeric($form_data['item']))
{
    $msg = "잘못된 요청정보 입니다";
    Util::alertMsgHistoryBack($msg);
}

$BoardDAO       = new BoardDAO(); 

// Item이 있다면 가져오기
if($form_data['item']  > 0)
{   
    $subItems    = $BoardDAO->selectBoardItemList($form_data);
    $form_data['pro_item'] = $form_data['item'];
}



//category별 제품 가져오기
$form_data['pro_category'] = $form_data['cate']; 
$form_data['order'] = " pro_sort asc";
$productListCnt = $BoardDAO->selectBoardListCount($form_data);
$productList = $BoardDAO->selectBoardList($form_data);

//리스트 상단 베스트 가져오기 
$form_data['pro_list_best'] = "Y"; 
$productBestList = $BoardDAO->selectBoardList($form_data);



?>
<body>

    <!-- header -->
    <header id="header"></header>

    <!-- nav -->
    <nav id="nav"></nav>
    
    <!-- 서브컨텐츠 시작 -->
    <section class="sub">

        <!-- 서브 공통 탑 -->
        <div class="sub-top">
            <div class="sub-top__inner" style="padding-bottom: 0;">

                <div class="sub-top__depth">
                    <i class="fa-solid fa-house"></i>
                    <i class="sub-top__arrow fa-solid fa-angle-right"></i>
                    <span>
                        제품소개
                    </span>
                </div>
                <h2><?=$productList[0]['cate_name']?></h2>
                <h5>
                    신선하고 좋은 재료로 건강하고 푸짐하게! <br class="mo">
                    <b>랜시푸드의 메뉴를 소개합니다.</b>
                </h5>

            </div>
        </div>

        <!-- 서브콘텐츠 시작 -->
        <div class="product">

            <div class="product-slide-wrap">
                <!-- 요소-->
                <img src="/page/img/product_bg01.png" alt="" class="product-bg product-bg-01">
                <img src="/page/img/product_bg02.png" alt="" class="product-bg product-bg-02">

                <!--슬라이드 시작-->
                <div class="product-slide"> <!--양쪽 네비를 위한 포지션 렐러티브 박스 -->

                    <div class="product-slide__container"> <!--스와이퍼js 전체프레임 잡는곳-->

                        <ul class="swiper-wrapper product-slide__wrapper">
                        <?
                            for($i= 0; $i < count($productBestList); $i++){
                        ?>
                        	<li class="swiper-slide product-slide__slide">
                                <h6>
                                   <?=$productBestList[$i]["pro_title"]?>
                                </h6>
                                <div class="product-slide-img">
                                    <img src="<?=$productBestList[$i]["pro_new_thumbnail_path"]?>" alt="">
                                </div>
                                <p>
                                   <?=$productBestList[$i]["pro_weight"]?>
                                </p>
                            </li> 
                            <?}?>                 
                        </ul>
                    </div>
                    <div class="product-slide__pagination"></div>
                    <div class="product-slide__prev">
                        <i class="fa-solid fa-arrow-left"></i>
                    </div>
                    <div class="product-slide__next">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>

                </div>
                <!--슬라이드 끝-->

            </div>


            <div class="product__inner">

				<?
				    if($form_data['item']  > 0)
				    {
				?>
                <div class="product__tab">
                    <ul>
                    	<? 
                    	for($i = 0; $i < count($subItems); $i++)
                    	{
                    	    if($subItems[$i]["item_idx"] == $form_data['item']) $classOn ="on";
                    	    else $classOn ="";
                    	    
                    	?>                   	
                        <li class="<?=$classOn?>">
                            <a  href="list.php?cate=<?=$subItems[$i]['item_cate']?>&item=<?=$subItems[$i]['item_idx']?>">
                                <span>
                                   <?=$subItems[$i]['item_name']?>
                                </span>
                            </a>
                        </li>
                       <?}?>
                    </ul>
                </div>
				<?
				   }
				?>
                <div class="product__list-wrap">
                    <p>
                        총 <span><?=$productListCnt[0]['CNT']?></span>개 제품
                    </p>
                    <ul>
                    	<? 
                    	for($i = 0; $i < count($productList); $i++)
                    	{               	
                    	    
                    	?>
                        <li>
                            <div class="product__list-img">
                                <img src="<?=$productList[$i]['pro_thumbnail_path']?>" alt="">
                            </div>
                            <h6>
                                <?=$productList[$i]['pro_title']?>
                            </h6>
                            <p>
                                <?=$productList[$i]['pro_weight']?>
                            </p>
                        </li>
                        <?}?>                  

                    </ul>

                    <!-- div class="product__page-nation">
                        <ul>
                            <li class="on">
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                        </ul>
                    </div-->
                </div>
            </div>
            
            
            
        </div>

    </section>



    <!-- footer -->
    <footer id="footer"></footer>



    <!-- Script -->
    <script type="text/javascript" src="/common/js/wow.js"></script>
    <script src="/common/js/custom.js"></script>

    <script>
        var swiper = new Swiper(".product-slide__container", { //전체 프레임 선택자
            direction: "horizontal", //슬라이딩 방향
            loop: true, //순환가능
            spaceBetween: 0, //패널간의 간격
            slidesPerView: 2.3, //한 프레임에 복수개 패널 보임
            speed: 800, //슬라이딩 속도,
            centeredSlides: true,
            mousewheel: false,
            pagination: {
                el: ".product-slide__pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".product-slide__next",
                prevEl: ".product-slide__prev",
            },
            paginationClickable: true,
            breakpoints: {
                // when window width is <= 640px
                1400: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 1.7,
                    spaceBetween: 30
                },
                576: {
                    slidesPerView: 1.3,
                    spaceBetween: 0
                }
            }
        });
    </script>

</body>


</html>