var count=0; 
var parent;
var img;
function showMenu(){
    if (count%2==0){
        parent = document.getElementById("parent");
        parent.style.cssText="left:-20%; animation-name: sidebar; \
        animation-duration:2s; animation-fill-mode: forwards;";
        img = document.getElementsByTagName("img")[0];
        count++;
    }
    else{ 
        parent.style.cssText="left: 0%; animation-name: sidebar2; \
        animation-duration:2s; animation-fill-mode: forwards;";                    
        count++;
    }
}