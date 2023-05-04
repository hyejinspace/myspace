<?
include_once $_SERVER['DOCUMENT_ROOT']. "/_LIB/_include/common_include.php";
include_once $_SERVER['DOCUMENT_ROOT']. "/_LIB/_include/common_include_site.php";
include_once $_SERVER['DOCUMENT_ROOT']."/_DAO/site/class_NewWebzineDAO.php";
include_once $_SERVER['DOCUMENT_ROOT']."/common/html/initData.php";

$form_data['vol_idx'] = isset($_GET['idx']) && !empty($_GET['idx']) ? $_GET['idx'] : "";

//메뉴 Item
$rMenuItem     = $WebzineDAO->selectMenuItem();
for($i = 0; $i < count($rMenuItem); $i++)
{
    $menuItem[$rMenuItem[$i]['vol_menu_idx']] = $rMenuItem[$i]['vol_menu_name'];    
}

//페이지 데이터 호출
$result     = $WebzineDAO->selectWebzineData($form_data);
if(count($result) <= 0)
{
    $msg = "등록되지 않은 페이지 입니다.";
    Util::alertMsgHistoryBack($msg);
}
else
{
    if(Util::findURLVolume() != $result[0]['vol_volume'])
    {
        Header("Location: /page/".$result[0]['vol_volume']."/view.php?idx=".$form_data['vol_idx']);
    }    
    
    //페이지별 SEO 세팅
    $_SEO_TITLE         = $menuItem[$result[0]['vol_menu_idx']]." :: ".$result[0]['vol_title'];
    $_SEO_DESCRIPTION   = $result[0]['vol_introduction'];  
    
   //pageing 셋팅 
    $keyIndex = $result[0]['vol_sort']-1;     
    $lastIndex = count($pageResult)-1;
    if($pageResult[$keyIndex-1]['vol_idx'] > 0) //이전이 있다면
    { 
        $prevTitle = $pageResult[$keyIndex-1]['vol_menu_name'];
        if($pageResult[$keyIndex-1]['vol_contents_type'] == "link") $prevLink = $pageResult[$keyIndex-1]['vol_link_url'];
        else $prevLink = $_SERVER['PHP_SELF']."?idx=".$pageResult[$keyIndex-1]['vol_idx'];
        
    }
    else
    {
        $prevTitle = $pageResult[$lastIndex]['vol_menu_name'];
        if($pageResult[$lastIndex]['vol_contents_type'] == "link") $prevLink = $pageResult[$lastIndex]['vol_link_url'];
        else $prevLink = $_SERVER['PHP_SELF']."?idx=".$pageResult[$lastIndex]['vol_idx'];
    }
        
    if($pageResult[$keyIndex+1]['vol_idx'] > 0) //다음이 있다면
    {
        $nextTitle = $pageResult[$keyIndex+1]['vol_menu_name'];      
        if($pageResult[$keyIndex+1]['vol_contents_type'] == "link") $nextLink = $pageResult[$keyIndex+1]['vol_link_url'];
        else $nextLink = $_SERVER['PHP_SELF']."?idx=".$pageResult[$keyIndex+1]['vol_idx'];        
    }
    else
    {
        $nextTitle = $pageResult[0]['vol_menu_name'];         
        if($pageResult[0]['vol_contents_type'] == "link") $nextLink = $pageResult[0]['vol_link_url'];
        else $nextLink = $_SERVER['PHP_SELF']."?idx=".$pageResult[0]['vol_idx'];
    }     
   
    if($result[0]['vol_sort'] == 4 || $result[0]['vol_sort'] == 8 || $result[0]['vol_sort'] == 10)
    {
        $szSpanTag = '<span>';        
    }
    else
    {        
        $szSpanTag = '<span style="color:#333;">';
    }
    $prevHtml = '<a class="prev" href="'.$prevLink.'">'.$szSpanTag.$prevTitle.'</span></a>';
    $nextHtml = '<a class="next" href="'.$nextLink.'">'.$szSpanTag.$nextTitle.'</span></a>';
    //pageing 셋팅 끝
    
    //vod 셋팅   
    $vodFlag = false;
    if($result[0]['vol_menu_idx'] >= 19 && $result[0]['vol_menu_idx'] <= 21 || $result[0]['vol_menu_idx'] == 30)
    {
        $vodFlag = true;
    }
    
    if($vodFlag)
    {
        $form_data['vol_menu_idx'] = $result[0]['vol_menu_idx'];
        if($result[0]['vol_menu_idx'] == 30)    $form_data['vol_menu_idx'] = 20;
        $sVodList = $WebzineDAO->selectVodList($form_data);       
    }    
   
    $WebzineDAO->updatePageViewCount($form_data);
    
    //이벤트 세팅 영역
    //스탬프 찾기 이벤트 랜덤 발생
    
    /*
    $eventURLArr = explode("|",CookieUtil::getCookies("eventURL"));    
    $cookieURL = array_search($_SERVER['REQUEST_URI'], $eventURLArr);
    
    //해당 카테고리 idx값일경우에만 나오도록
    $eventViewPageList = Array("140","144","148","149");
    $eventExpoPage = array_search($result[0]['vol_idx'], $eventViewPageList);
    
    if($result[0]['vol_idx'] == 140)    $iconImage= "event_icon01.png";
    else if($result[0]['vol_idx'] == 144)    $iconImage= "event_icon02.png";
    else if($result[0]['vol_idx'] == 148)    $iconImage= "event_icon03.png";
    else if($result[0]['vol_idx'] == 149)    $iconImage= "event_icon04.png";    
    
    
    if($cookieURL !== false || $eventExpoPage === false){
        $randomValue = "NO";
    }
    else{
        $nowDate = date("Ymd", time());
        
        if($nowDate >= "20220511" && $nowDate <= "20220603"){
            $randomValue = "OK";
        }else{
            $randomValue = "NO";
        }
    }    
    */
}
$_SEO_TITLE = str_replace("<br/>", "", $_SEO_TITLE);
?>

<?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/new_head.php";?>
<body>
    <?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/header/Header_".$form_data['vol_volume'].".php";?>
    
    <section class="sub">
		<?=$result[0]['vol_top_content']?>
		<?=$result[0]['vol_content']?> 
		
		<? if($vodFlag == true && $sVodList != null && count($sVodList) > 0){ ?>
		
		 <div class="subBottom bgf4f4f4">
            <h3 class="Tit02 GmarketB pb-075rem">지난 호 영상 보기</h3>
            <div class="last_swiper">
                <button class="swiper-prev"><span>이전</span></button>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                    	<? for($i = 0; $i < count($sVodList); $i++ ){   	    
                    	  
                    	?>                    	
                        <div class="swiper-slide" data-youtube="<?=$sVodList[$i]['vol_vod_url']?>"><img src="<?=$sVodList[$i]['vol_thumbnail_path']?>" alt=""><p><?=$sVodList[$i]['vol_title']?></p></div>
                        <?}?>
                    </div>  
                </div>
                <button class="swiper-next"><span>다음</span></button>
            </div>  
        </div>
        <?}?>       
               
	  <div class="movement">
           	<?=$prevHtml?>
            <p class="now" id="crawling-nav-depth1"><span><?=$menuItem[$result[0]['vol_menu_idx']]?></span></p>
            <?=$nextHtml?>
        </div>  
                   
       
	<?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/new_footer.php";?>	    
	
	<?if($vodFlag == true && $sVodList != null && count($sVodList) > 0){?>
	<div class="popup">
        <div class="wrap video">
            <div class="video_wrap">
                <button class="video_close"><span>닫기</span></button>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AtysAatN1oc?autoplay=1&mute=1" autoplay="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    <?}?>
    <!-- 공통  -->
    <script type="text/javascript" src="/common/js/swiper.jquery.min.js" ></script>
    <script type="text/javascript" src="/common/js/2022_app.js"></script>
    <!-- Script(Sub) -->
    <script type="text/javascript" src="/common/js/2022_sub.js"></script>
    <script>

    	<?php
    	if($result[0]['vol_idx'] == 264 || $result[0]['vol_idx']== 267 || $result[0]['vol_idx']== 268){
    	?>
    	 if($(window).width() <= 576){
             $('.sub .boxBottom').css('height','100%');
         }else{
                 $('.sub .boxBottom').css('height','auto');
             }

         $(window).on('resize', function(){
             if($(window).width() <= 576){
                 $('.sub .boxBottom').css('height','100%');
             }else{
                 $('.sub .boxBottom').css('height','auto');
             }
         })
         
         <?php }?>
        // 과월호보기 Swiper
        var LastSwiper = new Swiper('.last_swiper .swiper-container', {
            prevButton: '.last_swiper .swiper-prev',
            nextButton: '.last_swiper .swiper-next',
            slidesPerView: 'auto',
            spaceBetween: 0,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
        });

        // Youtube 팝업
        $('.popup .video .video_wrap iframe').attr('src', '');

        $('.popup').click(function(){
            $(this).removeClass('on');
            $('.popup .video .video_wrap iframe').attr('src', '');
        });

        $('.sub .subBottom .last_swiper .swiper-slide').click(function(){
            var VideoID = $(this).attr('data-youtube'),
                VideoURL = 'https://www.youtube.com/embed/' + VideoID + '?autoplay=1&mute=1'

            $('.popup').addClass('on');
            $('.popup .video .video_wrap iframe').attr('src', VideoURL);
        });
        
    </script>
    <?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/share.php";?>             
</body>
</html>