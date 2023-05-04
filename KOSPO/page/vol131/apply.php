<?
include_once $_SERVER['DOCUMENT_ROOT']. "/_LIB/_include/common_include.php";
include_once $_SERVER['DOCUMENT_ROOT']. "/_LIB/_include/common_include_site.php";
include_once $_SERVER['DOCUMENT_ROOT']."/_DAO/site/class_NewWebzineDAO.php";
include_once $_SERVER['DOCUMENT_ROOT']."/common/html/initData.php";

$form_data['board_link']    = $_SERVER['PHP_SELF'];
$result = $WebzineDAO->selectBoardCustomPageData($form_data);
$form_data['vol_idx'] = $result[0]['vol_idx'];
//페이지 데이터 호출
if(count($result) <= 0)
{
    $msg = "등록되지 않은 페이지 입니다.";
    Util::alertMsgHistoryBack($msg);
}
else
{    //페이지별 SEO 세팅
    $_SEO_TITLE         = "KOSPO 이벤트 :: ".$result[0]['vol_title'];
    $_SEO_DESCRIPTION   = $result[0]['vol_introduction'];  
    
    
    $pageArr    = Array();  
    $prevHtml = "";    
    $nextHtml = "";    
    for($i=0; $i < count($pageResult); $i++)
    {
        if($pageResult[$i]['vol_idx'] == $result[0]['vol_idx'])
        {
            $keyIndex = $i;
        }
        
        $pageArr[$i]['name'] =$pageResult[$i]['vol_menu_name'];
        if($pageResult[$i]['vol_contents_type'] == "link")
            $pageArr[$i]['link'] = $pageResult[$i]['vol_link_url'];
        else 
            $pageArr[$i]['link'] = $_SERVER['PHP_SELF']."?idx=".$pageResult[$i]['vol_idx'];   
        
    }     
   
    if($pageArr[$keyIndex-1]['link'] != null){ //이전이 있다면
        $prevHtml = '<a class="prev" href="'.$pageArr[$keyIndex-1]['link'].'"><span>'.$pageArr[$keyIndex-1]['name'].'</span></a>';
    }
    
  /*  if($pageArr[$keyIndex+1]['link'] != null){ //다음이 있다면
        $nextHtml = '<a class="next" href="'.$pageArr[$keyIndex+1]['link'].'"><span>'.$pageArr[$keyIndex+1]['name'].'</span></a>';
    }
    else
    {
        $nextHtml = '<a class="next" href="'.$pageResult[0]['vol_link_url'].'"><span>'.$pageResult[0]['vol_menu_name'].'</span></a>';
    }
    */
    
    $prevHtml = '<a class="prev" href="event.php"><span>'.$pageResult[12]['vol_menu_name'].'</span></a>';
    $nextHtml = '<a class="next" href="view.php?idx='.$pageResult[0]['vol_idx'].'"><span>'.$pageResult[0]['vol_menu_name'].'</span></a>';
    
    //$nextHtml = '<a class="next" href="/page/vol124/view.php?idx=106"><span>'.$pageResult[0]['vol_menu_name'].'</span></a>';
    $WebzineDAO->updatePageViewCount($form_data);
}

?>

<?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/new_head.php";?>
<body>
    <?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/header/Header_".$form_data['vol_volume'].".php";?>
    
   <section class="sub">
        <div class="subTop circle">
            <h2 class="title">참여 신청하기</h2>
            <div class="text">월간 웹진 &lt;KOSPO FAMILY&gt;에 참여해주세요!</div>
            <div class="circle_bg"></div>
        </div>       
        <div class="subBottom apply">
            <div class="apply_top">
            	 <h3 class="apply_title">참여하고 싶은 코너를 선택한 후 하단에 정보를 입력해주세요.</h3>
                <h5 class="apply_subtitle">
                    <span class="GmarketM" style="display: block; font-size: 1rem; margin-bottom: 0.25rem; color: #e95005;">*이 코너는 남부발전 임직원의 <br class="mo575 None"/>참여신청을 위한 코너입니다.</span>
                    <span style="display: block;">*본 페이지는 사연소개 및 경품지급을 위해 <br class="mo991 None"/>‘성함, 소속부서’ 등의 개인정보를 수집함을 알려드립니다.</span>
                </h5>
                <div class="apply_radio">
                    <input type="radio" id="radio01" name="radio" value="<?=PRO_POSE?>" checked>
                    <label for="radio01"><span>프로-pose</span></label>
                    <input type="radio" id="radio02" value="<?=NO_FIGHT?>" name="radio">
                    <label for="radio02"><span>안싸우면 다행이야</span></label>
                    <input type="radio" id="radio03" value="<?=KOSPO_VLOG?>" name="radio">
                    <label for="radio03"><span>KOSPO 브이로그</span></label>
                </div>
                <p class="apply_text">‘프로-pose’는 평소 시도해보지 못했지만 변신을 원했던 남부발전 가족들에게 인생샷을 찍어드리는 코너입니다. 사진은 웹진에 소개되며 기념으로 탁상용 액자도 보내드립니다.</p>
                <!--
                    프로-pose :
                    ‘프로-pose’는 평소 시도해보지 못했지만 변신을 원했던 KOSPO 가족들에게 인생샷을 찍어드리는 코너입니다. 사진은 웹진에 소개되며 기념으로 탁상용 액자도 보내드립니다.

                    안싸우면 다행이야 :
                    ‘안 싸우면 다행이야’는 부서 간 이야기를 담습니다. 서로 잘 알지 못했던 두 부서가 함께 담소를 나누며 서로를 이해하는 소통의 시간을 가집니다.
                    
                    KOSPO 브이로그 :
                    ‘KOSPO 브이로그’는 고프로 카메라를 이용해 남부 프로의 소소한 일상을 풀어내는 코너입니다. 모두가 공감하는 일상을 공유하면서 보다 특별한 추억을 남기는 의미 있는 일이 될 것입니다.
                -->
            </div>
            <div class="apply_bottom">
                <ul class="apply_info">
                    <li>
                        <p>성함</p>
                        <input type="text" maxlength="12" name="vol_name">
                    </li>
                    <li>
                        <p>소속</p>
                        <input type="text" placeholder="소속본부와 부서명을 적어주세요" maxlength="20" name="vol_attach">
                    </li>                    
                    <li>
                        <p>참여사연</p>
                        <textarea placeholder="사연을 총 200자 미만으로 적어주세요" name="vol_content"  maxlength="200"></textarea>
                    </li>
                    <li>
                        <p>개인정보 동의</p>
                        <div class="apply_agree">
                            <h5 class="Tit02">개인정보수집 및 이용 동의 안내</h5>
                            <p class="pb-025rem">한국남부발전은 수집되는 귀하의 개인정보를 중요시하며 「개인정보보호법」을 준수하고 있습니다.</p>
                            <p class="flex02">
                                <span style="margin-right: 0.25rem;"><b>-</b></span>
                                <span><b>제공받는 자 :</b> 남부발전 웹진 운영 대행사 경성문화사</span>
                            </p>
                            <p class="flex02">
                                <span style="margin-right: 0.25rem;"><b>-</b></span>
                                <span><b>개인정보 수집 항목 :</b> 성함, 소속</span>
                            </p>
                            <p class="flex02">
                                <span style="margin-right: 0.25rem;"><b>-</b></span>
                                <span><b>개인정보 수집·이용 목적 :</b> 남부발전 웹진 사연소개 및 경품지급을 위해 사용</span>
                            </p>
                            <p class="flex02">
                              <span style="margin-right: 0.25rem;"><b>-</b></span>
                                <span><b>개인정보의 보유 및 이용기간 :</b> 사연소개 및 경품지급 후 복구 불가능한 방법으로 지체없이 파기</span>
                            </p>
                            <p class="flex02">
                                <span style="margin-right: 0.25rem;"><b>-</b></span>
                                <span><b>동의를 거부할 권리가 있으며 동의하지 않을 경우 추첨에서 제외됩니다.</b></span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="apply_check">
                            <input type="checkbox" id="check" name="check01">
                            <label for="check">개인정보 수집·이용에 동의합니다.</label>
                        </div>
                    </li>
                    <li>        
                        <p>자동등록방지</p>
                        <div class="apply_secure">
                            <span><img id="captcha_img" src="/_LIB/_secure_code/secureimage.php?key=<?=rand();?>"/ alt=""></span>
                            <button type="button" id="captcha_btn" ><i class="fas fa-sync-alt"></i></button>
                            <input type="text" name="captcha"/>
                        </div>
                    </li>
                </ul>
                <button class="apply_btn" onClick="submitPersonalStory()">참여신청</button>
            </div>
        </div>
        <div class="movement">
            <?=$prevHtml?>
            <p class="now"><span>참여 신청하기</span></p>
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
    $("#captcha_btn").on('click', function() {        
        $("#captcha_img").attr("src", "/_LIB/_secure_code/secureimage.php?key=" + parseInt(Math.random() * 100000, 10)); });
       
    $("input[name='radio']").change(function(){
    	var vol_menu_idx = $("input[name='radio']:checked").val();
    	if(vol_menu_idx == <?=PRO_POSE?>)
    	{
    		$('.apply_text').text('‘프로-pose’는 평소 시도해보지 못했지만 변신을 원했던 남부발전 가족들에게 인생샷을 찍어드리는 코너입니다. 사진은 웹진에 소개되며 기념으로 탁상용 액자도 보내드립니다.');
    	}
    	else if(vol_menu_idx == <?=NO_FIGHT?>)
    	{
    		$('.apply_text').text('‘안 싸우면 다행이야’는 부서 간 이야기를 담습니다. 서로 잘 알지 못했던 두 부서가 함께 담소를 나누며 서로를 이해하는 소통의 시간을 가집니다.');
    	}
    	else
    	{
    		$('.apply_text').text('‘KOSPO 브이로그’는 고프로 카메라를 이용해 남부 프로의 소소한 일상을 풀어내는 코너입니다. 모두가 공감하는 일상을 공유하면서 보다 특별한 추억을 남기는 의미 있는 일이 될 것입니다.');
    	}    
    });
   
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
   
    function onlyNumber(e)
    {
    	var regexp = /[^[0-9]/g;
    	
    	var value = $(e).val().replace(/ /gi, '');
    	
    	if(regexp.test(value)){
    	  	$(e).val(value.replace(regexp,""));
    		$(e).focus();
    		return false;
    	}
    }
    function submitPersonalStory(){				
		
		var vol_attach = $("input[name='vol_attach']").val();
		var vol_name 	= $("input[name='vol_name']").val();
	//	var vol_phone 	= $("input[name='vol_phone']").val();
		var vol_content 	= $("textarea[name='vol_content']").val();
		var chkboxObject = $("input[name='check01']");
		var vol_menu_idx = $("input[name='radio']:checked").val();
		var captcha			= $("input[name='captcha']").val();     
			
		if(vol_attach == ""){
			alert('소속을 입력해 주세요.');
			return;
		}

		if(vol_name == ""){
			alert('이름을 입력해 주세요.');
			return;
		}	
		
	/*	if(vol_phone == ""){
			alert('휴대폰번호를  입력해 주세요.');
			return;
		}		
*/
		if(vol_content == ""){
			alert('내용을 입력해 주세요.');
			return;
		}
		
		if(!chkboxObject.is(":checked")){
			alert('상품발송을 위한 개인정보 제공 동의에 체크 해주세요.');
			return;
		}

	    if(captcha == ""){
	 		alert("자동등록방지 코드를 입력해 주세요.");
	 			return;
		}
		
		var tURL = "/_CONTROLLER/site/AjaxRegStory.php";
		var param = {
    					action : "write",
    					vol_volume : '<?=$result[0]['vol_volume']?>',
    					vol_menu_idx : vol_menu_idx,    					    					
    					vol_attach : vol_attach,
    					vol_name : vol_name,   				
    					vol_content : vol_content, 
    					captcha : captcha       					
					};
		
		var rData = callAjax("data", "POST", tURL, param);
			
		alert(rData.msg);
		if(rData.code == "0000"){
			location.reload();
		}			
	}	 
    </script>         
</body>
</html>