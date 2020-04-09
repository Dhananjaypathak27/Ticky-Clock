function clocky(){
    var color;
    var h,m,s;
    color =new Date();
    h = color.getHours();
    m = color.getMinutes();
    s = color.getSeconds();
    if(h<=9){
        h= '0'+ h;
    }
    if(m<=9){
        m= '0'+ m;
    }
    if(h<=9){
        s= '0'+ s;
    }
    color = "#" + h + m + s;
    var currentTime = h + ":" + m + ":" +s;
    document.getElementById("con").innerHTML = currentTime;
    document.body.style.background = color;
    setTimeout(clocky,1000);
}
clocky(); 
