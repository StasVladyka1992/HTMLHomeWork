function checkName() {
 var name  = document.getElementsByName("name")[0];
 var email = document.getElementsByName("email")[0];
 /*флаг i позволяет искать независимо от регистра
 судя по всему, эта регулярка не совсем полная*/  
 if (name.value!="" && (/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i).test(email.value)){
     var subButton = document.getElementById("submitButton");
     subButton.removeAttribute("disabled");
     subButton.style.color="green";
 } 
 else {
    var subButton = document.getElementById("submitButton");
    subButton.setAttribute('disabled', 'disabled');
    subButton.style.color="red";
 } 
}