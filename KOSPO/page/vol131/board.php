<?
include_once $_SERVER['DOCUMENT_ROOT']. "/_LIB/_include/common_include.php";
include_once $_SERVER['DOCUMENT_ROOT']. "/_LIB/_include/common_include_site.php";
include_once $_SERVER['DOCUMENT_ROOT']."/_DAO/site/class_NewWebzineDAO.php";
include_once $_SERVER['DOCUMENT_ROOT']."/common/html/initData.php";

$page = isset($_GET['page']) && !empty($_GET['page']) ? $_GET['page'] : 1;
$form_data['board_link']    = $_SERVER['PHP_SELF'];
$form_data['menu_idx'] = isset($_GET['menu_idx']) && !empty($_GET['menu_idx']) ? $_GET['menu_idx'] : CLICK_KOSPO_BOARD;
$form_data['keyword'] = isset($_GET['keyword']) && !empty($_GET['keyword']) ? $_GET['keyword'] : "";
$form_data['keyword'] = htmlspecialchars($form_data['keyword']);

$result = $WebzineDAO->selectBoardCustomPageData($form_data);
$form_data['vol_idx'] = $result[0]['vol_idx'];
$prevHtml = '<a class="prev" href="view.php?idx='.$pageResult[0]['vol_idx'].'"><span>'.$pageResult[0]['vol_menu_name'].'</span></a>';
$nextHtml = '<a class="next" href="view.php?idx='.$pageResult[2]['vol_idx'].'"><span>'.$pageResult[2]['vol_menu_name'].'</span></a>';

//페이지별 SEO 세팅
$_SEO_TITLE         = $pageResult[1]['vol_menu_name']." :: ".$result[0]['vol_title'];
$_SEO_DESCRIPTION   = $result[0]['vol_introduction'];
//리스트 가져오기
//페이지 생성
$countResult = $WebzineDAO->selectNewsListCnt($form_data);
$pageMaker = new Criteria($countResult[0]['CNT'], $page, 8, $_SERVER['PHP_SELF'], $_SERVER['QUERY_STRING']);

//LIMIT 숫자 세팅
$form_data['start_num']     = $pageMaker->getStartRowNumber();
$form_data['page_num']      = $pageMaker->getEndRowNumber();


$NewsResult = $WebzineDAO->selectNewsList($form_data);
$menuItem[CLICK_KOSPO_BOARD] = 'All';
$menuItem[ITEM_ISSUE_KOSPO] = '이슈 코스포';
$menuItem[ITEM_NOW_KOSPO] = '본부는 지금';
$menuItem[ITEM_NOTICE_KOSPO] = '알립니다';
$cssFlag[$form_data['menu_idx']] = 'class="on"';

$WebzineDAO->updatePageViewCount($form_data);
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
        <div class="subBottom borad">
            <div class="tab">
                <p class="mo"><?=$menuItem[$form_data['menu_idx']]?></p>
                <ul>               	          	
                    <li <?=$cssFlag[CLICK_KOSPO_BOARD]?>><a href="board.php?&menu_idx=<?=CLICK_KOSPO_BOARD?>">All</a></li>
                    <li <?=$cssFlag[ITEM_ISSUE_KOSPO]?>><a href="board.php?&menu_idx=<?=ITEM_ISSUE_KOSPO?>">이슈 KOSPO</a></li>
                    <li <?=$cssFlag[ITEM_NOW_KOSPO]?>><a href="board.php?&menu_idx=<?=ITEM_NOW_KOSPO?>">본부는 지금</a></li>
                    <li <?=$cssFlag[ITEM_NOTICE_KOSPO]?>><a href="board.php?&menu_idx=<?=ITEM_NOTICE_KOSPO?>">알립니다</a></li>
                </ul>
            </div>
            <div class="search">
            	<form action="board.php">
                <input type="text" id="keyword" name="keyword" placeholder="검색어를 입력 해 주세요">
                <button class="btn-search"><span>검색</span></button>
                </form>
            </div>
            <ul class="list">
            <?php  for($i =0; $i < count($NewsResult); $i++)
                   {     
                       $newsDate= substr($NewsResult[$i]['vol_news_date'],0,4).".".substr($NewsResult[$i]['vol_news_date'],5,2).".".substr($NewsResult[$i]['vol_news_date'],8,2);                       
                   
             ?>
                 <li>
                    <a href="board_view.php?idx=<?=$NewsResult[$i]['vol_idx']?>&menu_idx=<?=$form_data['menu_idx']?>&keyword=<?=$form_data['keyword']?>">
                        <div class="img">
                            <img src="<?=$NewsResult[$i]['vol_thumbnail_path']?>" alt="">
                        </div>
                        <div class="box">
                            <p class="title"><?=$NewsResult[$i]['vol_title']?></p>
                            <div class="info">
                                <span><?=$menuItem[$NewsResult[$i]['vol_menu_idx']]?></span>  
                                <span><?=$newsDate?></span>
                            </div>
                        </div>
                    </a>
                </li>
                <?}?>
                </ul>
                <?if ($countResult[0]['CNT'] > 8){?>
                	<button class="btn-more" onclick="moreBtn();">더보기</button>
                <?}?>
            </div>
          <div class="movement">
           	<?=$prevHtml?>
            <p class="now" id="crawling-nav-depth1"><span><?=$pageResult[1]['vol_menu_name']?></span></p>
            <?=$nextHtml?>
        </div>          
        
    <?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/new_footer.php";?>   
    
     <!-- 공통  -->        
    <script type="text/javascript" src="/common/js/swiper.jquery.min.js" ></script>
    <script type="text/javascript" src="/common/js/2022_app.js"></script>
    
    <!-- Script(Sub) -->
    <script type="text/javascript" src="/common/js/2022_sub.js"></script>    
    <?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/share.php";?>          
    <script>   
    $(document).ready(function(){
        $('#keyword').val('<?=$form_data['keyword']?>');
    });
    var page = <?=$page?>;
        $('.tab > ul > li').click(function(){
            var Text = $(this).text();

            $(this).addClass('on');
            $('.tab > ul > li').not($(this)).removeClass('on');
            $('.tab .mo').text(Text);
            $('.tab .mo').removeClass('on');
            
            if($(window).width() <= 1365){
                $('.tab > ul').slideUp();
            }
        });

        $('.tab .mo').click(function(){
            $(this).toggleClass('on');
            $(this).next('ul').slideToggle();
        });

        function moreBtn()
        {    
           if(page == 1) page = page+1;
           var lastpage = '<?=$pageMaker->getEndPageNumber()?>';		
            var tURL 	= "/_CONTROLLER/site/AjaxPage.php";
    		var param	= {
    				action : "more",
    				//action : "moreTest",
    				page : page,    				
    				menu_idx : '<?=$form_data['menu_idx']?>',
    				keywords : '<?=$form_data['keywords']?>'
    		}

    		var rData 	= callAjax("data", "POST", tURL, param);   	
    		    		
    		if(rData.count > 0){
    			page++;    			
    			$(".list").append(rData.data);

    			//alert(page + " " + lastpage);
    			if(page > lastpage)
    			{
    				$('.btn-more').css('display','none');
    			}
    		}
    	}
    	
    </script>
</body>
</html>             
                
                
                