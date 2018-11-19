setInterval(function submitButton(){
    var form = document.getElementById("form");
    var subButton = document.getElementById("submitButton");
    if (form.name.value == "" || form.email.value==""){
        subButton.disabled = true;
    }
    else {
        subButton.disabled=false;  
    }
}, 10);