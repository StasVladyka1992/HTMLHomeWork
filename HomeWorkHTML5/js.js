var color;
function goToAnotherPage (){
    window.location.href="https://www.tut.by/";
}
function changeColor(){
    /*узнать свойство элемента и записать его в переменную*/
    color = window.getComputedStyle(document.body).backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor = "green";
}
function returnColor(){
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
}
 function drawNewPage(){
     document.getElementsByTagName("body")[0].innerHTML="";
     setTimeout(function (){location.replace("../HomeWorkHTML4/MainTask/html1.html")}, 3000);

 }





