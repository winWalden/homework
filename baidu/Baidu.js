window.onload = function(){  
    var images = document.getElementsByTagName("img");
    var pos = 0;
    var len = images.length-1;
        
    setInterval(
        function(){    
            images[pos].style.display = 'none';
            pos = ++pos == len-1 ? 0 : pos;
            images[pos].style.display = 'inline';
        },1500);
};

function showsub(li){  
    var submenu=li.getElementsByTagName("ul")[0];  
    submenu.style.display="inline";  
}  

function hidesub(li){  
    var submenu=li.getElementsByTagName("ul")[0];  
    submenu.style.display="none";  
}