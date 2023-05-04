function historyBack(){
	history.back();
}

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


function printButton(){
	$(".movement").hide();
	$("body").css("height", "auto");
    window.print();
    
    $(".movement").show();
    $("body").css("height", "100%");
    
    var btnOffset = $("#fmtbtn").offset();
    $('html, body').animate({scrollTop : btnOffset.top}, 0);
}
