function login(){
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;        
    var data = 'username='+username+'&'+'password='+password;
    if(username ===''&& password ===''){
        window.alert("用户名或密码不能为空！");
        return false;
    }
    
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
        if(sta == 200){
            window.alert("成功登录！");
            window.location.href=("http://fvcz9mljl2.52http.net/login_success.html");
        }
        else if(sta == 402 || sta== 401 ){
            window.alert("用户名或密码错误！请检查一下喔（＞人＜；）");
        }
        else if(sta == 404){
            window.alert("用户名或密码错误！请检查一下");
        }
    }
    }
    xmlhttp.open("POST","http://hympbav0zb.52http.net/login",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(data);
}