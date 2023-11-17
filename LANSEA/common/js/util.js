function historyBack(){
	history.back();
}

function printButton(){
	$(".movement").hide();
	$("body").css("height", "auto");
    window.print();
    
    $(".movement").show();
    $("body").css("height", "100%");
    
    var btnOffset = $("#fmtbtn").offset();
    $('html, body').animate({scrollTop : btnOffset.top}, 0);
}

function keywordSubmit(){
	
	var tURL 	= "/_CONTROLLER/site/board/AjaxKeyword.php";
	var param	= {
			action : "write",
			keywords : $("input[name='keywords']").val()
	}

	var rData 	= callAjax("data", "POST", tURL, param);
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    
    return "";
}

function setCookie(cname, cvalue, exdays) {
	
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function manualClose(){

	setCookie("MANUAL","Y",365);
	
	  $('.eventPopup').hide();
}

$(document).ready(function(){
	
	$("label[name='manualfclose']").click(function(){
		manualClose();
	});
});