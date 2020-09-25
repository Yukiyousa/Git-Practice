function signup(){
    if(username ===''||password ==='' || school===''||grade===''){
        window.alert("不能有空喔！");
        return false;
    }
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var school = document.getElementById("school").value;
    var grade = document.getElementById("grade").value;            
    var data = 'username='+username+'&'+'password='+password +'&'+'school='+school+'&'+'grade='+grade;
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else{
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xmlhttp.onreadystatechange = function(){
    
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        var sta = xmlhttp.responseText;
        if(sta == 201){
            window.location.href=("http://fvcz9mljl2.52http.net/regist_success.html");
        }
        else if(sta == 404 ){
            window.alert("用户名或密码错误！请检查一下");
        }
        else if(sta == 405){
            window.alert("该用户已存在（＞人＜；）");
        }
    }
    }
    xmlhttp.open("POST","http://hympbav0zb.52http.net/Regist",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(data);
}