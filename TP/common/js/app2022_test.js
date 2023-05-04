
//공유하기 Data 셋팅 
  var url_default_fb = "https://www.facebook.com/sharer/sharer.php?u="; 
  var url_default_naver = "http://share.naver.com/web/shareView.nhn?url="; 
  var title_default_naver = "&title="; 
  var url_default_ks = "https://story.kakao.com/share?url="; 
  var url_default_tw_txt = "https://twitter.com/intent/tweet?text="; 
  var url_default_tw_url = "&url="; 
  var url_default_band = "http://band.us/plugin/share?body="; 
  var url_route_band = "&route="; 

  var url_this_page = window.location.href; 
  var title_this_page = document.title; 
  var url_combine_fb = url_default_fb + encodeURIComponent(url_this_page); 
  var url_combine_naver = url_default_naver + encodeURI(encodeURIComponent(url_this_page)) + title_default_naver + encodeURI(title_this_page); 
  var url_combine_tw = url_default_tw_txt + document.title + url_default_tw_url + encodeURIComponent(url_this_page); 
  var url_combine_band = url_default_band + encodeURIComponent(url_this_page)+ '%0A' + encodeURI(title_this_page)+'%0A' + '&route=tistory.com'; 
  var url_combine_ks = url_default_ks + encodeURIComponent(url_this_page); 
  
  $(document).on("click", "#sh-link", function(e) { // 링크복사 시 화면 크기 고정 
		$('html').find('meta[name=viewport]').attr('content', 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'); 
		var html = "<input id='clip_target' type='text' value='' style='position:absolute;top:-9999em;'/>"; 
		$(this).append(html); 
		var input_clip = document.getElementById("clip_target"); //현재 url 가져오기 
		var _url = $(location).attr('href'); $("#clip_target").val(_url); 
		if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) { 
			var editable = input_clip.contentEditable; 
			var readOnly = input_clip.readOnly; 
			input_clip.contentEditable = true; 
			input_clip.readOnly = false; 
			var range = document.createRange(); range.selectNodeContents(input_clip); 
			var selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); input_clip.setSelectionRange(0, 999999); input_clip.contentEditable = editable; input_clip.readOnly = readOnly; } else { input_clip.select(); } try { var successful = document.execCommand('copy'); input_clip.blur(); 
			if (successful) { alert("URL이 복사 되었습니다. 원하시는 곳에 붙여넣기 해 주세요."); // 링크복사 시 화면 크기 고정 
		$('html').find('meta[name=viewport]').attr('content', 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes'); } else { alert('이 브라우저는 지원하지 않습니다.'); } } catch (err) { alert('이 브라우저는 지원하지 않습니다.'); } }); //클립보드 복사
  
//main animation
$(document).ready(function(){
    $('.text_wrap').addClass('on');    
    
    
    $('.menu').html('<span></span><span>전체 메뉴 보기</span><span></span>');
    $('nav button').html('<span></span><span>전체 메뉴 닫기</span><span></span>');
    
    $('.menu').click(function(){
    	//alert('open');
        $('nav').show();
        $('body,html').css('overflow','hidden');
    });
    $('nav button').click(function(){
    	//alert('close');
        $('nav').hide();
        $('body,html').css('overflow','visible');
    });  
    
});



//share
$('.sns').click(function(){	
    $('.function ul').toggleClass('on');
})


$('.shareBtn').click(function()
{
	
	if($(this).attr("data-sns") == "facebook")
	{
		window.open(url_combine_fb, document.title, 'scrollbars=no, width=600, height=600');
		return false;
	} 
	if($(this).attr("data-sns") == "twitter")
	{
		window.open(url_combine_tw, document.title, 'scrollbars=no, width=600, height=600');
		return false;
	}    
	if($(this).attr("data-sns") == "band")
	{
		window.open(url_combine_band, document.title, 'scrollbars=no, width=600, height=600');
				return false;
	}              
})

//modal
$('.banner').click(function(){
    $('.modal').css('display','block');
    $('.modal').addClass('on');
});

if($('.modal').hasClass('on') === true){
    $('html,body').css('overflow-y','hidden');
}

$('.modal .close').click(function(){
    $('.modal').css('display','none');
});


        
// $('.send').click(function(){
//     $('.modal').css('display','none');
// });

//swiper (공통)
var Swiper3 = new Swiper('.information.renewal .swiper03', {
    pagination: '.swiper03 .swiper-pagination',
    paginationClickable: true,
    slidesPerView: '1',
    spaceBetween: 0,
    autoHeight: true,
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
    loop: true,
});


$("#captcha_btn").on('click', function() {        
    $("#captcha_img").attr("src", "/_LIB/_secure_img/secureimage.php?key=" + parseInt(Math.random() * 100000, 10)); });   
    
$("#file_btn1").on('click', function () {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    $("#origin_file_img").trigger('click');
});

$("#file_btn2").on('click', function () {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    $("#origin_file_doc").trigger('click');
});

$("#origin_file_img").on('change', function () {
	 	
	if($("#origin_file_img").val() != "") {
    	
		var maxSize = 5 * 1024 * 1024; // 5MB
   	 	var value = this.value;
   	 	var fileSize = $("#origin_file_img")[0].files[0].size;
   			    		
		var ext = $("#origin_file_img").val().split(".").pop().toLowerCase();		    
		if($.inArray(ext, ["jpg", "jpeg", "png"]) == -1) {
			alert("첨부파일은 jpg, png 만 가능합니다.");
			$("#origin_file_img").val("");
			$("#file1").val("");
			return false;
		}

		if(fileSize > maxSize){
			alert("첨부파일 사이즈는 5MB 이내로 등록 가능합니다.");
			$("#origin_file_img").val("");
			$("#file1").val("");
			return false;
		}    		
		
 	     $("#file1").val(value);
		
	}
	
});

$("#origin_file_doc").on('change', function () {	

	if($("#origin_file_doc").val() != "") {		

		var maxSize = 5 * 1024 * 1024; // 5MB    	
		var value = this.value;    
		var fileSize = $("#origin_file_doc")[0].files[0].size;
		
		var ext = $("#origin_file_doc").val().split(".").pop().toLowerCase();		    
		if($.inArray(ext, ["doc", "docx", "hwp", "hwpx"]) == -1) {
			alert("첨부파일은 doc, hwp 만 가능합니다.");
			$("#origin_file_doc").val("");
			$("#file2").val("");
			return false;
		}

		if(fileSize > maxSize){
			alert("첨부파일 사이즈는 5MB 이내로 등록 가능합니다.");
			$("#origin_file_doc").val("");
			$("#file2").val("");
			return false;
		}

		$("#file2").val(value);
	}
	
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

function validateEmail(email)
{
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}  

function popPostSearchOpen(){
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
            $("input[name='quiz_address']").val(data.roadAddress);
            $("input[name='quiz_zipcode']").val(data.zonecode);
        }
    }).open();
}

function contact_submit()
{ 		
	var captcha = $("input[name='captcha']").val(); 

	if(!$("input[name='quiz_name']").val()) { alert("성함을 입력해주세요."); $("input[name='quiz_name']").focus(); return false; } 
	if(!$("input[name='quiz_attach']").val()) { alert("소속기관을 입력해주세요."); $("input[name='quiz_attach']").focus(); return false; }	 
	if(!$("input[name='quiz_phone']").val()) { alert("연락처를 입력해주세요.");$("input[name='quiz_phone']").focus(); return false; } 
	
	if(type == "<?=BACKJUBU_REVIEW?>" || type =="<?=RADIO_REVIEW?>" || type =="<?=ESSAY_REVIEW?>") //주소값
	{
		if(!$("input[name='quiz_address']").val()) { alert("주소 찾기로 주소를 입력해주세요."); return false; } 
		if(!$("input[name='quiz_address2']").val()) { alert("상세 주소를 입력해주세요."); $("input[name='quiz_address2']").focus(); return false; }
		if(!$("input[name='quiz_zipcode']").val()) { alert("주소 찾기로 우편번호를 입력해주세요."); return false; }
	}
	  
	if(type == "<?=BACKJUBU_REVIEW?>" && !$("#file1").val()){ alert("이미지를 업로드 해주세요.");return false; } //백주부 
	if(type == "<?=ESSAY_REVIEW?>" && !$("#file2").val()){ alert("파일을 업로드 해주세요.");return false; } //라디오스타 
	
	if(!$("#check01").is(":checked")) { alert("개인정보수집 및 이용에 동의해야합니다."); $("#check01").focus(); return; }		   	
	
	if(type == "<?=STORY_REVIEW?>" || type == "<?=RADIO_REVIEW?>")
	{
		if(!$("textarea[name='quiz_contents']").val()) { alert("사연을 써주세요!"); $("textarea[name='quiz_contents']").focus(); return false;  }
	}

	if(captcha == ""){
 		alert("자동등록방지 코드를 입력해 주세요.");
 			return;
	}	
	
	$("#contact_form").submit();	
	
}


