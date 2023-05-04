//2016.11.09. 기획변경으로 인하여 사용하지 않음

var loginUrl = '/common/util/SNS/SessionLogin.php';
var logoutUrl = '/common/util/SNS/SessionLogin.php';
var Url = '/common/util/SNS/SessionLogin.php';

function loginCheck(){
	
	var param = {ltype:'logincheck'};
	
	$.ajax({ 
		type: "POST", 
		url: Url, 
		cache: false, 
		data: param,
		dataType: "json",
		success: function(json){
			try
			{
				if(json.status == 'Y'){
					$('#snstype').empty('#snstype');
					$('#username').empty('#username');
					$('#loginCheck').empty('#loginCheck');
					$('#snstype').append("<li style='position:absolute; left:30px;'><img src='http://web-windysoft.ktics.co.kr/web/sofan/main/board/icon_"+json.stype+".png'></li");
					if(json.stype == 'Facebook'){
						$('#snstype').append("<li class='username'>"+json.name+"</li><li class='btn_logout' id='btn_logout' onclick='javascript:logOut();'>Logout</li>");
					}else if(json.stype == 'Google'){
						$('#snstype').append("<li class='username'>"+json.name+"</li><li class='btn_logout' id='btn_logout' onclick='javascript:logoutGoogle();'>Logout</li>");
					}else{
						$('#snstype').append("<li class='username'>"+json.name+"</li><li class='btn_logout' id='btn_logout' onclick='javascript:alert('트위터');'>Logout</li>");
					}
				}
				else{
					$('#snstype').empty('#snstype');
					$('#username').empty('#username');
					$('#btn_logout').remove();
					$('#loginCheck').append('<p>로그인 후 작성해 주세요.</p>');
					$('#snstype').append('<li class="login_facebook"><a href="javascript:loginFacebook();">Facebook</a></li>');
					$('#snstype').append('<li class="login_google" id="login_google"><a href="javascript:loginGoogle();">Google</a></li>');
					$('#snstype').append('<li class="login_twitter"><a href="javascript:alert();">Twitter</a></li>');
					
				}
			}
			catch(e){alert('로그인 여부 체크 오류');}
			
			recommendHtml();
		},
		error: function(){alert('로그인 여부 체크 오류');}
	});
	
	
}


function loginFacebook(){
	FB.init({
	    appId      : '497744773754134',
	    cookie     : true,  // enable cookies to allow the server to access 
	                        // the session
	    xfbml      : true,  // parse social plugins on this page
	    version    : 'v2.2' // use version 2.2
	});
	
	FB.login(function(response) {
	    if (response.status === 'connected') {
	      // Logged into your app and Facebook.
	    	FB.api('/me', function(response) {
		    	
	    		var param = {id:response.id, name:response.name, stype:'Facebook', ltype:'login'};
	    		
	    		$.ajax({ 
	    			type: "POST", 
	    			url: loginUrl, 
	    			cache: false, 
	    			data: param,
	    			dataType: "json",
	    			success: function(json){
	    				loginCheck();
	    			},
	    			error: function(){alert('로그인 실패 다시 시도해주세요.');}
	    		});

	    	});
	    } else if (response.status === 'not_authorized') {
	      	alert('앱 가입을 승인해주세요');
	    } else {

	    }
	},{scope: 'public_profile,email'});
  }

  function logOut(){
	  
	    var param = {ltype:'logout'};
 
		$.ajax({ 
			type: "POST", 
			url: Url, 
			cache: false, 
			data: param,
			dataType: "json",
			success: function(json){
				FB.logout();
			},
			error: function(){alert('로그아웃 실패 다시 시도해주세요.');}
		});
		
		loginCheck();
		
  }
  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ko_KR/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
 
  
//----------------------Google---------------------------------
  var auth2;
  var clientId = '146749284016-rtblgkqk4sh2e6immlg6cj6dl8b5c7oa.apps.googleusercontent.com'; 
  var scopes = 'profile';
  
  $(document).ready(function(){
	  gapi.load('client:auth2', initAuth);
  });
  
  function initAuth(){
	  auth2 = gapi.auth2.init({
		  client_id: clientId,
		  scopes : scopes
	  });
  }
	
  function loginGoogle(){
	  auth2.signIn().then(function() {
		  var param = {id:auth2.currentUser.get().getId(), name:auth2.currentUser.get().getBasicProfile().getName(), stype:'Google', ltype:'login'};
	      $.ajax({ 
	  			type: "POST", 
	  			url: loginUrl, 
	  			cache: false, 
	  			data: param,
	  			dataType: "json",
	  			success: function(json){
	  				try
	  				{
	  					if(json.status == 'Y'){
	  						loginCheck();
	  					}
	  					else{
	  						loginCheck();
	  					}
	  				}
	  				catch(e){alert('로그인 실패 다시 시도해주세요.');}
	  			},
	  			error: function(){alert('로그인 실패 다시 시도해주세요.');}
	  		});
	  });
  }
  
  
  function logoutGoogle() {
	  
	  auth2.signOut().then(function(){
		  var param = {ltype:'logout'};
			$.ajax({ 
			type: "POST", 
			url: logoutUrl, 
			cache: false, 
			data: param,
			dataType: "json",
			success: function(json){
				try
				{
					if(json.status == 'Y'){
						loginCheck();
					}
					else{
						loginCheck();
					}
				}
				catch(e){alert('로그아웃 실패 다시 시도해주세요.');}
			},
			error: function(){alert('로그아웃 실패 다시 시도해주세요.');}
		});
	  });
	  
	  
   }
  
   