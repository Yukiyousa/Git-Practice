function login(){
    
    
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
        if(sta == 'Loingged'){
            window.alert("成功登录！");
            this.$router.push('/Register');
        }
        else if(sta == 'Unauthorized' ){
            window.alert("您尚未注册！");
            this.$router.push('/Err');
        }
        else{
            window.alert("发生了未知的错误");
            this.$router.push('/Err');
        }
    }
    }
    xmlhttp.open("POST","http://47.96.110.228/login",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(this.obj);
}