
var icon = document.getElementById("icon");

icon.onclick = function(){
   var isDarkTheme =  document.body.classList.toggle("dark-theme");
    if(isDarkTheme){
        icon.src = "portfolio_site_img/moon.png";
    } 
    
    else {
        icon.src = "portfolio_site_img/sun.png";
    }
}
