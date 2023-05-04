function cosmosfarm_share_is_mobile(){
	var mobile = new Array('iPhone', 'iPad', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'Opera Mini', 'IEMobile');
	for(var word in mobile){
		if(navigator.userAgent.match(mobile[word]) != null) return true;
	}
	return false;
}
function cosmosfarm_share_naver(url, text){
	//alert(url);
	var w = 720;
	var h = 720;
	var popup = window.open("http://share.naver.com/web/shareView.nhn?url="+encodeURI(encodeURIComponent(url))+"&title="+encodeURIComponent(text), 'cosmosfarm_share', 'width='+w+',height='+h+',left='+(screen.availWidth-w)*0.5+',top='+(screen.availHeight-h)*0.5);
	return false;
}
function cosmosfarm_share_facebook(url){
	alert(url);
	var w = 720;
	var h = 350;
	jQuery.post('https://graph.facebook.com', {id:encodeURI(url),scrape:true});
	window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url), 'cosmosfarm_share', 'width='+w+',height='+h+',left='+(screen.availWidth-w)*0.5+',top='+(screen.availHeight-h)*0.5);
	return false;
}
function cosmosfarm_share_twitter(url, text){
	var w = 720;
	var h = 350;
	window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(text)+'&url='+encodeURIComponent(url), 'cosmosfarm_share', 'width='+w+',height='+h+',left='+(screen.availWidth-w)*0.5+',top='+(screen.availHeight-h)*0.5);
	return false;
}
function cosmosfarm_share_band(url, text){
	var w = 410;
	var h = 540;
	window.open('http://www.band.us/plugin/share?body='+encodeURIComponent(text)+encodeURIComponent("\n")+encodeURIComponent(url)+'&route='+encodeURIComponent(url), 'cosmosfarm_share', 'width='+w+',height='+h+',left='+(screen.availWidth-w)*0.5+',top='+(screen.availHeight-h)*0.5);
	return false;
}
function cosmosfarm_share_kakaostory(url, text){
	var w = 600;
	var h = 600;
	window.open("https://story.kakao.com/share?url="+encodeURIComponent(url), 'cosmosfarm_share', 'width='+w+',height='+h+',left='+(screen.availWidth-w)*0.5+',top='+(screen.availHeight-h)*0.5);
	return false;
}
function cosmosfarm_share_kakaotalk(url, text, imgURL){
	
	//var share_img_src = $('meta[property="og:image"]').attr('content');
	if(imgURL){
		Kakao.Link.sendDefault({
			objectType: 'feed',
			content: {
				title: text,
				imageUrl: imgURL,
				link: {
					mobileWebUrl: url,
					webUrl: url
				}
			}
		});
	}
	else{
		alert('카카오 API  Key값이 필요합니다.');
	}

	return false;
}
function cosmosfarm_share_google(url){
	var w = 600;
	var h = 600;
	window.open('https://plus.google.com/share?url='+encodeURIComponent(url), 'cosmosfarm_share', 'width='+w+',height='+h+',left='+(screen.availWidth-w)*0.5+',top='+(screen.availHeight-h)*0.5);
	return false;
}
function cosmosfarm_share_line(url, text){
	if(cosmosfarm_share_is_mobile()){
		var w = 410;
		var h = 540;
		window.open('http://line.me/R/msg/text/?'+encodeURIComponent(text)+encodeURIComponent("\n")+encodeURIComponent(url), 'cosmosfarm_share', 'width='+w+',height='+h+',left='+(screen.availWidth-w)*0.5+',top='+(screen.availHeight-h)*0.5);
	}
	else{
		alert('라인이 설치된 모바일에서만 가능합니다.');
	}
	return false;
}
function cosmosfarm_share_default(url){
	
	var successful = false;
	var el = document.createElement('input');
    el.value = url;
    el.text = url;
    el.setAttribute('id', 'copyText');
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    var coptTextArea = document.getElementById('copyText');
    $('#copyText').text(url);
    coptTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    successful = true;
	//if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) { 
	//}
	
    if (successful) { 
    	alert("URL이 복사 되었습니다. 원하시는 곳에 붙여넣기 해 주세요.");
    	$('html').find('meta[name=viewport]').attr('content', 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes'); 
    } else { 
    	alert('이 브라우저는 지원하지 않습니다.'); 
    }
}
function cosmosfarm_share(sns, url, title, imgURL){
	//alert(url);
	switch(sns){
		case 'naver': cosmosfarm_share_naver(url, title); break;
		case 'facebook': cosmosfarm_share_facebook(url); break;
		case 'twitter': cosmosfarm_share_twitter(url, title); break;
		case 'band': cosmosfarm_share_band(url, title); break;
		case 'kakaostory': cosmosfarm_share_kakaostory(url, title); break;
		case 'kakaotalk': cosmosfarm_share_kakaotalk(url, title, imgURL); break;
		case 'google': cosmosfarm_share_google(url); break;
		case 'line': cosmosfarm_share_line(url, title); break;
		case 'default': cosmosfarm_share_default(url); break;
	}
	return false;
}