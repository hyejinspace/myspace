<?
include_once $_SERVER['DOCUMENT_ROOT']. "/_LIB/_include/common_include.php";
include_once $_SERVER['DOCUMENT_ROOT']. "/_LIB/_include/common_include_site.php";
include_once $_SERVER['DOCUMENT_ROOT']."/_DAO/site/class_NewWebzineDAO.php";
include_once $_SERVER['DOCUMENT_ROOT']."/common/html/initData.php";

$form_data['vol_idx'] = isset($_GET['idx']) && !empty($_GET['idx']) ? $_GET['idx'] : "";
$form_data['menu_idx'] = isset($_GET['menu_idx']) && !empty($_GET['menu_idx']) ? $_GET['menu_idx'] : "12";
$form_data['keyword'] = isset($_GET['keyword']) && !empty($_GET['keyword']) ? $_GET['keyword'] : "";
$form_data['keyword'] = htmlspecialchars($form_data['keyword']);

$rMenuItem     = $WebzineDAO->selectMenuItem();
for($i = 0; $i < count($rMenuItem); $i++)
{
    $menuItem[$rMenuItem[$i]['vol_menu_idx']] = $rMenuItem[$i]['vol_menu_name'];
}

//페이지 데이터 호출

$result     = $WebzineDAO->selectWebzineData($form_data);
$form_data['vol_news_date'] = $result[0]['vol_news_date'];
$form_data['vol_sort'] = $result[0]['vol_sort'];
//$result
if(count($result) <= 0)
{
    $msg = "등록되지 않은 페이지 입니다.";
    Util::alertMsgHistoryBack($msg);
}
else
{   
    //페이지별 SEO 세팅
    $_SEO_TITLE         = "Click KOSPO :: ".$result[0]['vol_title'];
    $_SEO_DESCRIPTION   = $result[0]['vol_introduction'];
        
    //if($pageResult[0]['vol_link_url'] != null){ //이전이 있다면
        $prevHtml = '<a class="prev" href="/page/vol123/view.php?idx=106"><span>이달의 프로그램</span></a>';
    //}
    
    if($pageResult[2]['vol_idx'] != null){ //다음이 있다면
        $nextHtml = '<a class="next" href="view.php?idx='.$pageResult[2]['vol_idx'].'"><span>'.$pageResult[2]['vol_menu_name'].'</span></a>';
    }  
    
    
    // Click Kospo pageing    
    $prevNewsData     = $WebzineDAO->prevNewsData($form_data);   
    $nextNewsData     = $WebzineDAO->nextNewsData($form_data);
    
    $replaceArray = array(
        "slide", "slideContent",
        "title01", "title02", "title03",
        "br10","br15","br30","line","bold","red","brown",
        "center","right","left","small",
        "box01","box02",
        "tag01",
        "img1","img2","img3","img4","img5","img6","img7","img8","img9","img10",
        "img11","img12","img13","img14","img15","img16","img17","img18","img19","img20",
        "caption1","caption2","caption3","caption4","caption5","caption6","caption7","caption8","caption9","caption10",
        "caption11","caption12","caption13","caption14","caption15","caption16","caption17","caption18","caption19","caption20",
        "contents"
    );
    
    
    //이미지 파일 호출
    $imageFileResult    = $WebzineDAO->selectBoardImageFileData($form_data);
    
    for($i=0; $i<count($imageFileResult); $i++)
    {
        $imageFileArray[$i]     = $imageFileResult[$i]['bfile_path'];
        $captionFileArray[$i]   = $imageFileResult[$i]['bfile_caption'];        
    }
    $WebzineDAO->updatePageViewCount($form_data);
}

?>

<?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/new_head.php";?>
<body>
    <?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/header/Header_".$form_data['vol_volume'].".php";?>
    
    <section class="sub">
    	<div class="subTop circle">
            <h2 class="title">Click KOSPO</h2>
            <div class="text"> KOSPO 소식</div>
            <div class="circle_bg"></div>
        </div>
        <div class="subBottom view">	
        	<div class="view-top">
                <p class="category"><?=$menuItem[$result[0]['vol_menu_idx']]?></p>
                <h2 class="title"><?=$result[0]['vol_title']?></h2>
            </div>
            <div class="view-bottom">	
            	<?=Util::pregMatchReplaceContent($replaceArray, $result[0]['vol_content'], $imageFileArray, $captionFileArray)?>				
			 </div>
			 	
			 <? //if($prevNewsData[0]['vol_idx'] > 0 || $nextNewsData[0]['vol_idx'] > 0){?>	
			 <div class="view-pagenation"> <!-- 뉴스 이전/다음 -->
			 	<?if($prevNewsData[0]['vol_idx'] > 0){?>
                <a href="board_view.php?idx=<?=$prevNewsData[0]['vol_idx']?>&menu_idx=<?=$form_data['menu_idx']?>&keyword=<?=$form_data['keyword']?>" class="prev"><span><?=$prevNewsData[0]['vol_title']?></span></a>
                <?}?>
                <a href="board.php?menu_idx=<?=$form_data['menu_idx']?>&keyword=<?=$form_data['keyword']?>" class="list"><span>목록</span></a>
                <?if($nextNewsData[0]['vol_idx'] > 0){?>
                <a href="board_view.php?idx=<?=$nextNewsData[0]['vol_idx']?>&menu_idx=<?=$form_data['menu_idx']?>&keyword=<?=$form_data['keyword']?>" class="next"><span><?=$nextNewsData[0]['vol_title']?></span></a>
                <?}?>
            </div>
            <?//}?>
         </div>   
	   <div class="movement"> <!-- 카테고리 이전/다음 -->
           	<?=$prevHtml?>
            <p class="now" id="crawling-nav-depth1"><span>Click KOSPO</span></p>
            <?=$nextHtml?>
        </div>         
     
          
	<?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/new_footer.php";?>
	
	 <!-- 공통  -->
    <script type="text/javascript" src="/common/js/swiper.jquery.min.js" ></script>
    <script type="text/javascript" src="/common/js/2022_app.js"></script>
    <!-- Script(Sub) -->
    <script type="text/javascript" src="/common/js/2022_sub.js"></script>
    <?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/share.php";?>       
   
</body>
<script>
$(document).ready(function (){
    /*Swiper 다중 생성 처리문*/
    var swiperArr = [];
    var swiperObject 	= $(".sub .subBottom.view .view-bottom .view_slider");
    var swiperCount 	= swiperObject.length;
    
    for(var i=0; i<swiperCount; i++){

        var swiper_container = swiperObject.eq(i).find(".swiper-container");
        var swiper_pagination = swiperObject.eq(i).find(".swiper-pagination");
        var swiper_nextButton = swiperObject.eq(i).find(".swiper-button-next");
        var swiper_prevButton = swiperObject.eq(i).find(".swiper-button-prev");

        swiperArr[i] = new Swiper(swiper_container, {
            pagination: swiper_pagination,
            paginationClickable: true,
            nextButton: swiper_nextButton,
            prevButton: swiper_prevButton,
            slidesPerView: 'auto',
            spaceBetween: 0,
            autoplay: 3000,
            loop: true,
            autoplayDisableOnInteraction: false,
        });
    }
});	
</script>
</html>