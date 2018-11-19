var count = 0;

function toggle(){
    if (count%2==0)
    {animatsiaTurnOn();}
     else animatsiaTurnOff();
}

function animatsiaTurnOn(){
    
    var container0 = document.getElementById("cont1").style.cssText="animation-name: sidebar;\
    display: flex;\
    flex-direction: column;\
    background-color: goldenrod;\
    width: 30%;\
    height: 40vh;\
    justify-content: space-around;\
    align-items: center;\
    position: relative;\
    left: 35%;\
    animation-duration: 3s;\
    top:12vh;";  
    count++;
}
function animatsiaTurnOff(){
    var container0 = document.getElementById("cont1").style.cssText="display:none";
    count++;
}