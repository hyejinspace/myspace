/**
 * Created by JUE on 2015-12-01.
 */

// 이벤트 취소
function KHI_DEFAULT(event) {
    if (event.preventDefaut) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}


// 빈 문자열 검사
function KHI_empty(input, msg, type, name) {
    var value = input.value;

    if(value == '') {
    	if(type == "alert")
    		alert(msg);
    	else if(type == "id")
    		$("#"+name).text(msg);
    	else if(type == "class")
    		$("."+name).text(msg);
    	else
    		console.log(msg);
    	
    	input.focus();
    	return true;
    }
    return false;
}
function KHI_PW(id, pw, msg) {
    var id = id.value, pw = pw.value;
    var checkNumber = pw.search(/[0-9]/g);
    var checkEnglish = pw.search(/[a-z]/ig);
    //var checkSpecial = pw.search(/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/g);
    if( id == '' || pw == '' )
    {
        alert(msg);
        return true;
    }
    if( !/^[a-zA-Z0-9]{5,12}$/.test(pw) )
    {
        alert('숫자와 영문자 조합으로 5~12자리를 입력바랍니다.');
        return true;
    }
    if( /(\w)\1\1\1/.test(pw) ){
        alert('같은 문자를 연속해서 4번 이상 사용하실 수 없습니다.');
        return true;
    }
    if( checkNumber < 0 || checkEnglish < 0 )
    {
        alert('숫자와 영어를 혼용해서 입력바랍니다.');
        return true;

    }
    /*if( checkSpecial < 0 )
     {
     alert(1);
     }*/
    if ( pw.search(id) > -1 )
    {
        alert('비밀번호에 아이디가 포함되어 있습니다.');
        return true;

    }

    return false;
}

// 메일
function KHI_mail(input, msg) {
    var value = input.value;

    var regex2 = /[가-힣]/;

    if(regex2.test(value)) {
        alert(msg);
        return true;
    }

    var regex = /^([\w-]+(?:\.[\w-]+)*)/;
    if(value.length==0 || !regex.test(value)) {
        alert(msg);
        input.focus();
        return true;
    }
    return false;

}

// 이메일
function KHI_Email(input, msg) {
    var value = input.value;

    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    if(regex.test(value)) {
        return false;
    }
    alert(msg);
    return true;

}
// 아이디 id
function KHI_id(input, msg) {
    var value = input.value;
    var length = input.value.length;

    var regex = /[^0-9|a-z|_|\-|]/;

    if(length < 5 || regex.test(value) || value == '') {
        input.focus();
        if(msg) {alert(msg);}
        return true;
    }
    return false;
}


// 길이 검사
function KHI_length(input, msg, min_length, max_length) {
    var length = input.value.length;

    if(max_length) {
        if(min_length > length || length > max_length) {

            if(msg) {alert(msg)};
            input.focus();
            return true;
        }
    } else {
        if(min_length > length) {
            if(msg) {alert(msg)};
            input.focus();
            return true;
        }

    }
    return false;
}


// 숫자 검사
// 숫자가 아닌 값이 있을경우 true
function KHI_number(input, msg) {
    var value = input.value;

    var regex = /[^0-9]/;
    if(value=='' || regex.test(value)) {
        alert(msg);
        input.focus();
        return true;
    }

    return false;
}

// 핸드폰 검사
// 길이가 4인 숫자가 아닐경우 true
function KHI_phone(input, msg) {
    var value = input.value;

    var regex = /[0-9]{4}/;
    if(value.length != 4 || !regex.exec(value)) {
        alert(msg);
        input.focus();
        return true;
    }
    return false;
}

// 한글 이름
function KHI_KoName(input, msg) {
    var value = input.value;

    var regex = /[가-힣]{2,4}$/;
    if(value.length > 8 || !regex.test(value)) {
        alert(msg);
        input.focus();
        return true;
    }
    return false;

}

//한글 이름
function KHI_NickName(input, msg) {
    var value = input.value;

    var regex = /[가-힣0-9]{2,4}$/;
    if(value.length > 8 || !regex.test(value)) {
        alert(msg);
        input.focus();
        return true;
    }
    return false;

}

// 영어 이름
function KHI_EnName(input, msg) {
    var value = input.value;

    var regex = /[^a-z|A-Z|\s]/;
    if(regex.test(value)) {
        alert(msg);
        input.focus();
        return true;
    }
    return false;

}

// 비밀번호
function KHI_PassConfirm(input, input_confirm, msg) {
    var pass = input.value;
    var passConfirm = input_confirm.value;

    if(pass == passConfirm) {
        return false;
    }
    alert(msg);
    input_confirm.value ="";
    input_confirm.focus();
    return true;

}



// 이미지
function KHI_image(input, msg) {
    var extension = ['bmp', 'jpeg', 'jpg', 'gif', 'png'];
    var value = input.value;
    var type = value.slice(value.lastIndexOf('.')+1).toLocaleLowerCase();

    for(var i = 0, max = extension.length; i < max; ++i) {
        if(extension[i] == type) {return false;}
    }
    alert(msg);
    input.value = null;
    input.focus();
    return true;
}

// 문서
function KHI_document(input, msg) {
    var extension = ['bmp', 'jpeg', 'jpg', 'gif', 'png'];
    var value = input.value;
    var type = value.slice(value.lastIndexOf('.')+1).toLocaleLowerCase();

    for(var i = 0, max = extension.length; i < max; ++i) {
        if(extension[i] == type) {return false;}
    }
    alert(msg);
    input.value = null;
    input.focus();
    return true;
}

//동영상
function KHI_video(input, msg) {
    var extension = ['mp4'];
    var value = input.value;
    var type = value.slice(value.lastIndexOf('.')+1).toLocaleLowerCase();

    if(input.files[0].size > 20900000) {
        alert("20mb 이하 파일만 등록가능합니다.");
        input.value = null;
        input.focus();
        return true;
    }

    for(var i = 0, max = extension.length; i < max; ++i) {
        if(extension[i] == type) {return false;}
    }
    alert(msg);
    input.value = null;
    input.focus();
    return true;
}

// 셀렉트
function KHI_select(input, msg) {
    var value = input.value;

    if(!value) {
        alert(msg);
        input.focus();
        return true;
    }
    return false;
}

// 라디오
function KHI_radio(name, msg) {

    var input = document.getElementsByName(name);

    for(var i =0; i < input.length; i++) {
        if(input[i].checked == true) {
            return false;
        }
    }

    alert(msg);
    return true;


}

// 이미지, 문서 파일
function check_file (input, msg) {
    var extension = ['bmp', 'jpeg', 'jpg', 'gif', 'png', 'hwp', 'docx', 'ppt', 'pptx', 'xls', 'xlsx'];
    var value = input.value;
    var type = value.slice(value.lastIndexOf(".") + 1).toLocaleLowerCase();

    for(var i = 0, max = extension.length; i < max; ++i ) {
        if(extension[i] == type) {return false;}
    }
    alert(msg);
    input.value = null;
    input.focus();
    return true;
}


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















