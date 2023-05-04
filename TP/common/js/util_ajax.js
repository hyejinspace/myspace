function callAjax(rType, method, tUrl, param){
	
	switch(rType)
	{
		case "data":
			
			var rData;

			$.ajax({ 
				type: method, 
				url: tUrl, 
				cache: false, 
				data: param,
				async: false,
				dataType: "json",
				success: function(data){
					rData = data;
				},
				error: function(request, status, error){
					alert('callAjax Error rType : data ');
					// alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);					 
				}
			});
			
			return rData;		
		break;
		
		case "html":
			
			var rData;

			$.ajax({ 
				type: method, 
				url: tUrl, 
				cache: false, 
				data: param,
				async: false,
				dataType: "html",
				success: function(data){
					rData = data;
				},
				error: function(request, status, error){
					alert('callAjax Error rType : data ');
				}
			});
			
			return rData;		
		break;
		
		case "msg":

			$.ajax({ 
				type: method, 
				url: tUrl, 
				cache: false, 
				data: param,
				dataType: "json",
				success: function(data){
					alert(data['msg']);
					if(data['rUrl'] != null){
						location.href= data['rUrl'];
					}
				},
				error: function(request, status, error){
					alert('callAjax Error rType : msg ');
				}
			});
			
		break;
		
		case "form":
			
			jQuery.ajaxSettings.traditional = true;
			var rData;

			$.ajax({ 
				type: method, 
				url: tUrl, 
				cache: false, 
				data: param,
				async: false,
				dataType: "json",
				contentType : false,
				processData : false,
				success: function(data){
					rData = data;
				},
				error: function(request, status, error){
					alert('callAjax Error rType : data ');
				}
			});
			
			return rData;		
		break;
		
		default:
			
			$.ajax({ 
				type: method, 
				url: tUrl, 
				cache: false, 
				data: param,
				dataType: "json",
				success: function(data){
					if(data['rUrl'] != null){
						location.href= data['rUrl'];
					}
				},
				error: function(request, status, error){
					alert('callAjax Error rType : msg ');
				}
			});
		
		break;
	}
	
	
} 