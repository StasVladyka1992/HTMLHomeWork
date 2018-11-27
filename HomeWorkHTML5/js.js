function goToAnotherPage (){
    window.location.href="https://www.tut.by/";
}
function changeColor(){
    var color = window.getComputedStyle(document.body).backgroundColor;
    if (color=="rgb(255, 215, 0)"){
        document.getElementsByTagName("body")[0].style.backgroundColor ="green";
    }   
    else {
        document.getElementsByTagName("body")[0].style.backgroundColor ="gold";
    }
}
 function drawNewPage(){
    //удаление содержимого html-файла
    var body = document.getElementsByTagName("body")[0];
    body.innerHTML ="";
    // добавление html-разметки
    var container = document.createElement('div');
    container.className = "container";
    container.innerHTML = "<div class='d1' id='d1'></div><div class='d1' id='d2'></div><div class='d2'></div><div class='d3' id='d4'></div><div class='d3' id='d5'></div> <div class='d3' id='d6'></div>";
    body.appendChild(container);
    // подключение css файла
    var cssLink = document.createElement('link');
    cssLink.setAttribute('rel', 'stylesheet');
    cssLink.setAttribute('type', 'text/css');
    cssLink.setAttribute('href', '../HomeWorkHTML4/TaskFromHW3/Task2/css1.css')
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(cssLink);
    body.style.backgroundColor = "initial";
 }





