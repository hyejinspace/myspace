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
    $prevHtml = '<a class="prev" href="/page/'.$form_data['vol_volume'].'/view.php?idx='.$pageResult[10]['vol_idx'].'"><span style="color: #000;">프로열전</span></a>';
    $nextHtml = '<a class="next" href="/page/'.$form_data['vol_volume'].'/apply.php"><span style="color: #000;">참여 신청하기</span></a>';
    $WebzineDAO->updatePageViewCount($form_data);
}

?>

<?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/new_head.php";?>
<body>
    <?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/header/Header_".$form_data['vol_volume'].".php";?>
    
   <section class="sub">
     <div class="subTop crawling-contents-top" style="background-image: url('/page/vol131/img/sub11_00.jpg'); background-position: 67.5% 50%;">
        <div class="boxTop">
            <span id="crawling-nav-depth1">KOSPO 이벤트</span>
            <img src="/page/vol131/img/sub11_00_mo.jpg" alt="" class="img">
        </div>
        <div class="boxBottom">
            <h2 class="title" id="crawling-contents-title" style="color: #000;">알쏭달쏭 꼬불꼬불<br/>미로 찾기 게임 </h2>
            <div class="by">
                <span style="line-height: 1.45; word-break: keep-all; color: #000;">
                    꼬불꼬불한 미로를 따라 가다 보면 11월호 웹진에 소개된 단어가 나옵니다. <br/>
                    10개의 단어 중 6개를 조합해주세요! <br/>
                    완성한 단어를 댓글로 적어주세요. 
                </span>
            </div>
        </div>
    </div>
    <div class="subBottom crawling-contents-textbox" style="background-color: #fffbde;">
        <div class="event oneAnswer">
            <div class="textbox pb-0">
                <h3 class="pb-075rem Tit01 GmarketB text-center">참여방법</h3>
                <p class="pb-075rem Tit02 GmarketM text-center">
                    ① 출발 표시에서 미로찾기 시작! <br/>
                    ② 막힌 곳을 피해 <br class="mo575 Block"/>도착 표시가 된 곳을 향해 간다. <br/>
                    ③ 가는 길에 만난 6개의 단어를 조합한 정답을 적어 응모한다.
                </p>
                <div class="text-center">
                    <p class="tag02 GmarketM text-center" style="margin: 0;">정답을 찾은 분 중 추첨하여 <br class="mo575"/>소정의 상품을 드립니다!</p>
                    <div class="pc576" style="height: 2.75rem;"></div>
                    <div class="mo575 Block" style="height: 1.75rem;"></div>
                </div>
                <div class="question" style="background-color: #fff; margin: 0 auto; max-width: 1200px; display: block; padding: 0 5%;">
                    <div class="pc576" style="height: 40px;"></div>
                    <div class="mo575 Block" style="height: 20px;"></div>
                    <p class="img pA-0">
                        <span>
                            <img src="/page/vol131/img/sub11_01.png" alt="" class="event_img">
                        </span>
                    </p>
                    <div class="pc576" style="height: 72px;"></div>
                    <div class="mo575 Block" style="height: 30px;"></div>
                    <p class="img pA-0">
                        <span>
                            <img src="/page/vol131/img/sub11_02.png" alt="" class="event_img">
                        </span>
                    </p>
                    <div class="pc576" style="height: 30px;"></div>
                    <div class="answer align-start" style="max-width: 665px; margin: 0 auto; padding: 3rem 0 1rem;">
                        <span><p><b style="font-size: 130%;">정답</b></p></span>
                        <span>
                            <input type="text"  maxlength="20" name="vol_content">
                        </span>
                    </div>
                </div>
                <div style="margin: 0 auto; max-width: 1200px; display: block; background-color: #fff;">
                    <div class="submit mrlA" style="max-width: 1000px; display: block; padding-top: 2rem;  background-color: #f6f6f6; margin-bottom: 2rem;">
                        <div class="flex02">
                            <span class="pc768" style="width: 15%;"></span>
                            <span>
                                <ul class="submit_info" style="margin-top: 0;">
                                    <li>
                                        <span><p><b>성함</b></p></span>
                                        <span>
                                           <input type="text" maxlength="15"  name="vol_name">
                                        </span>
                                    </li>
                                    <li>
                                        <span><p><b>연락처</b></p></span>
                                        <span>
                                            <input type="text" maxlength="15" placeholder="-제외" onkeyup="onlyNumber(this);" name="vol_phone">
                                        </span>
                                    </li>
                                </ul>
                            	<div class="submit_agree">
                                    <h5 class="Tit02"></h5>
                                    <div class="box01" style="background-color: #f2f4ff;">
                                        <h5 class="Tit02 pb-025rem">개인정보수집 및 이용 동의 안내</h5>
                                        <p class="pb-025rem">한국남부발전은 수집되는 귀하의 개인정보를 중요시하며 「개인정보보호법」을 준수하고 있습니다.</p>
                                        <p class="flex02 pb-0 text-left">
                                            <span style="margin-right: 0.25rem;"><b>-</b></span>
                                            <span><b>제공받는 자 :</b> 한국남부발전 웹진 운영 대행사 경성문화사</span>
                                        </p>
                                        <p class="flex02 pb-0 text-left">
                                            <span style="margin-right: 0.25rem;"><b>-</b></span>
                                            <span><b>개인정보 수집 항목 :</b> 성함, 연락처</span>
                                        </p>
                                        <p class="flex02 pb-0 text-left">
                                            <span style="margin-right: 0.25rem;"><b>-</b></span>
                                            <span><b>개인정보 수집·이용 목적 :</b> 한국남부발전 웹진 이벤트 경품지급을 위해 사용</span>
                                        </p>
                                        <p class="flex02 pb-0 text-left">
                                            <span style="margin-right: 0.25rem;"><b>-</b></span>
                                            <span><b>개인정보의 보유 및 이용기간 :</b> 경품지급 후 파기</span>
                                        </p>
                                        <p class="flex02 pb-0 text-left">
                                            <span style="margin-right: 0.25rem;"><b>-</b></span>
                                            <span><b>동의를 거부할 권리가 있으며 동의하지 않을 경우 추첨에서 제외됩니다.</b></span>
                                        </p>
                                    </div>
                            	</div>                        
                            <div class="submit_check">
                                <input type="checkbox" id="check01" name="check01">
                                <label for="check01">개인정보 수집·이용에 동의합니다.</label>
                            </div>
                            <div class="secure event">
                                <p>자동등록방지</p>
                                <div class="apply_secure">
                                   <span><img id="captcha_img" src="/_LIB/_secure_code/secureimage.php?key=<?=rand();?>"/></span>
                                    <button class="change" id="captcha_btn" type="button"><i class="fas fa-sync-alt"></i></button>
                                    <input type="text" name="captcha" >
                                </div>
                            </div>
                        </span>
                                <span class="pc768" style="width: 15%;"></span>
                            </div>
                        </div>
                        <div class="button_wrap">
                             <button class="submit_btn"  onClick="javascript:submitPersonalStory();" >제출하기</button>
                            <p class="submit_text" style="color: #2b3d98; padding-bottom: 4rem;">*수집된 개인정보(이름,연락처)는 남부발전 이벤트<br class="mo991 None"/>당첨자 경품지급 용도로만 사용 후 파기합니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        <div class="subBottom crawling-contents-textbox" style="background-color: #283c88;">
            <div class="textbox">
                <div class="flex align-center">
                    <span style="margin-right: 2rem;">
                        <p class="flex02 pb-0">
                            <span class="GmarketB Tit02" style="min-width: 71px; margin-right: 0.75rem; color: #fff;">참여기간</span>
                            <span class="GmarketM Tit02 text-left keepall" style="color: #fff;">2022년 11월 11일 ~ 12월 4일</span>
                        </p>
                        <p class="flex02 pb-0">
                            <span class="GmarketB Tit02" style="margin-right: 0.75rem; color: #fff;">선정인원</span>
                            <span class="GmarketM Tit02" style="color: #fff;">5명 추첨</span>
                        </p>
                        <p class="flex02 pb-0">
                            <span class="GmarketB Tit02" style="min-width: 71px; margin-right: 0.75rem; color: #fff;">당첨선물</span>
                            <span class="GmarketM Tit02 text-left keepall" style="color: #fff;">올리브영 1만원</span>
                        </p>
                        <p class="flex02 pb-1rem">
                            <span class="GmarketB Tit02" style="min-width: 71px; margin-right: 0.75rem; color: #fff;">상품발송</span>
                            <span class="GmarketM Tit02 text-left keepall" style="color: #fff;">
                                다음호 웹진 오픈일에 맞춰 일괄발송 예정
                                <small style="display: block; font-size: 85% !important; color: #fff;">(이번호 당첨자에 해당하시는 분은 다음호 웹진 오픈일에 일괄 발송)</small>
                            </span>
                        </p>
                        <p class="GmarketM Tit02" style="color: #fff;">*당첨자에 한해 개별상품 발송하며, 미당첨자에게는 별도의 공지가 없습니다.</p>
                    </span>
                    <span>
                        <p>
                            <span>
                                <img src="/page/vol131/img/sub11_99.png" alt="" style="max-width: 216px;">
                            </span>
                        </p>
                    </span>
                </div>
            </div>
        </div>
        
        <div class="movement">
            <?=$prevHtml?>
            <p class="now"><span>KOSPO 이벤트</span></p>
            <?=$nextHtml?>
        </div>
	<?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/new_footer.php";?>	    
    <!-- 공통  -->
    <script type="text/javascript" src="/common/js/swiper.jquery.min.js" ></script>
    <script type="text/javascript" src="/common/js/2022_app.js"></script>
    <!-- Script(Sub) -->
    <script type="text/javascript" src="/common/js/2022_sub.js"></script>
    <?include_once $_SERVER['DOCUMENT_ROOT']."/common/html/share.php"?>   
    
    <script>
    $("#captcha_btn").on('click', function() {        
    	$("#captcha_img").attr("src", "/_LIB/_secure_code/secureimage.php?key=" + parseInt(Math.random() * 100000, 10)); });
    
   
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

		var vol_name 	= $("input[name='vol_name']").val();
		var vol_phone 	= $("input[name='vol_phone']").val();
		var vol_content = $("input[name='vol_content']").val();
		var chkboxObject = $("input[name='check01']");
		var captcha			= $("input[name='captcha']").val();

		if(vol_content == ""){
			alert('정답을 입력해 주세요.');
			return;
		}
		
		if(vol_name == ""){
			alert('이름을 입력해 주세요.');
			return;
		}	
		
		if(vol_phone == ""){
			alert('휴대폰번호를  입력해 주세요.');
			return;
		}		
		
		if(!chkboxObject.is(":checked")){
			alert('상품발송을 위한 개인정보 제공 동의에 체크 해주세요.');
			return;
		}
//alert(captcha);
		 if(captcha == ""){
		 		alert("자동등록방지 코드를 입력해 주세요.");
		 			return;
			}
			
		var tURL = "/_CONTROLLER/site/AjaxRegStory.php";
		var param = {
    					action : "write",
    					vol_volume : '<?=$result[0]['vol_volume']?>',
    					vol_menu_idx : <?=$result[0]['vol_menu_idx']?>,    					    					
    					vol_phone : vol_phone,
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