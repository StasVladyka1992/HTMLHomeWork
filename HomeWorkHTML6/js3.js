
// Only 2 fields are checking: email and name. 
// Я могу сделать проверку с помощью регулярных выражений, 
// изменив тип поля с "email" на "text", но не вижу в этом смысла, 
// т.к. html имеет функцию автоматической проверки правильности 
// введенной почты
setInterval(function submitButton(){
    var form = document.getElementById("form");
    var subButton = document.getElementById("submitButton");
    if (form.name.value == "" || form.email.value==""){
        subButton.disabled = true;
        subButton.style.cssText = "background-color: red;";
    }
    else {
        subButton.disabled=false; 
        subButton.style.cssText = "background-color: green;";
    }
}, 10);