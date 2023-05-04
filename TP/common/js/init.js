    
  $(document).ready(function(){  
	//  alert("init");
	  //initMeta();
//	  initHeader();
	  //initNavi();
	  ajaxHeader();
	//  initPageing();	
	  $("#footerHtml").load("footer.html");	  
  });
  
  function initMeta()
  {  
	  var url = window.location;
	  var pathname = window.location.pathname;
	  var jbSplit = pathname.split('/');
	  var pageNum = Number(jbSplit[4].substring( 0, 2));	  
	  var metaTitle  =  contentSubMenu.items[pageNum-1].title + ":" +contentSubMenu.items[pageNum-1].subtitle;
	  
	  $("meta[name='description']").attr("content", metaTitle);
	  $("meta[name='keywords']").attr("content", metaTitle);
	  $("meta[name='viewport']").attr("content", 'width=device-width, initial-scale=1, user-scalable=yes');
	  $("meta[name='format-detection']").attr("content", 'telephone=no');	  
	 
	  $("meta[property='og\\:type']").attr("content", 'website');        
	  $("meta[property='og\\:url']").attr("content", window.location);                    
	  $("meta[property='og\\:description']").attr("content", metaTitle);
	  $("meta[property='og\\:title']").attr("content", metaTitle);
	  $("meta[property='og:image']").attr("content", contentSubMenu.items[pageNum-1].img);	  
	  document.title = contentSubMenu.items[pageNum-1].subtitle;
  }
  
  function initHeader()
  {
	  var szHtml = '<button class="close"></button>'+
      '<div class="left">'+
          '<div class="left_inner">'+
              '<a href="index.html">'+
                  '<img src="/common/images/logo_white.png" alt="사학연금" class="white">'+
                  '<img src="/common/images/logo_color.png" alt="사학연금" class="color">'+
              '</a>'+
          '</div>'+
      '</div>'+
      '<div class="right">'+
          '<button class="menu"><span>메뉴</span></button>'+
      '</div>    ';
	$("#header").append(szHtml);
  }
  
  function initNavi()
  {		 
	  var i =0, j=0, idx=0;
	
	  var szHtml = '<button><span>닫기</span></button>'+
					       '<div class="nav_top">'+
				      '<span class="volume">2022년 8월호 제429호</span>'+
				      '<span>'+
				          '<a href="/page/vol429/html/back.html">과월호보기</a>'+        
				      '</span>'+
				  '</div>'+
				  '<ul class="gnb">';
	  
	 
	  for(i=0; i<4; i++){		  
		  
		  szHtml +='  <li> '+
          		   '<h2>' + contentCategory.title[i] + '</h2> ' +
          		   '<ul class="lnb"> ' ;	  
		
		  for(j = 0; j < contentCategory.menucnt[i]; j++)
		  {			  
			  szHtml +='<li><a href="'+contentSubMenu.items[idx].url +'">'+contentSubMenu.items[idx].title+'</a></li>';
			  idx++;
		  }
		  
		  szHtml += ' </ul>' + 
	                '</li>';	  
	
	  }
	  	
	 szHtml += '</ul>';	 
	$("#navi").append(szHtml);
	
  }
  
  function initPageing()
  {  	  
	  var url = window.location;
	  var pathname = window.location.pathname;
	  var jbSplit = pathname.split('/');
	  var pageNum = Number(jbSplit[4].substring( 0, 2));
	  var totalPageNum = contentSubMenu.items.length;
	  var szHtml = '';
	  
	  if(pageNum == 1)
	  {
		  szHtml += '<a href="'+contentSubMenu.items[totalPageNum-1].url+'" class="prev"><img src="/common/images/prev.png" alt=""><span>이전페이지</span></a>';
	  }
	  else
	  {
		  szHtml += '<a href="'+contentSubMenu.items[pageNum-2].url+'" class="prev"><img src="/common/images/prev.png" alt=""><span>이전페이지</span></a>';
	  }
	  
	  if(pageNum == totalPageNum)
	  {
		  szHtml += '<a href="'+contentSubMenu.items[0].url+'" class="next"><span>다음페이지</span><img src="/common/images/next.png" alt=""></a>';
	  }
	  else
	  {
		  szHtml += '<a href="'+contentSubMenu.items[pageNum].url+'" class="next"><span>다음페이지</span><img src="/common/images/next.png" alt=""></a>';
	  }
	  $("#pageHtml").append(szHtml); 
	
  }
  
  function ajaxHeader()
  {
	 // alert("ajaxHeader");
	  var tURL = "/page/vol429/html2/header.html";
	  var html = callAjax('html', 'POST', tURL, null);   
	   
	  $("#headerTotal").append(html);
	
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
  }