
$(function(){

});

function fnvalidate(){
    var txtemail = document.getElementById("txtemail").value;
    if(txtemail == ""){
        $(".invalid-feedback").show();
        return;
    }
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regex.test(txtemail)){
      $(".invalid-feedback").hide();
       location.replace("signinsuccess.html");
      return;
    }
    else{
      $(".invalid-feedback").text("Enter the valid email").show();
      return;
    }
}
function validateEmail(email) {
  
}
function fnValidateForm(){
    debugger;
    let email = document.getElementById("emailHelp");
    let password = document.getElementById("exampleInputPassword1");
 if(email.value == "" || email.value == undefined){
    alert("Please enter the email");
    document.getElementById("emailHelp").focus();
    return;
 }
 else if(password.value == ""){
    alert("Please enter the password");
    document.getElementById("exampleInputPassword1").focus();
    return;
 }
 else{
    alert("You successfully signed in.");
    
    window.location.replace("SignInSuccess.html");
 }
}

function fnSubmitSignup(){
   let name = document.getElementById("txtname").value
   let email = document.getElementById("txtEmail").value
   let password = document.getElementById("txtPassword").value
   if(name == ""){
      alert("Please enter the name");
      return;
   }
   else if(email == ""){
      alert("Please enter the password");
      return;
   }
   else if (password == ""){
      alert("Please enter the password");
      return;
   }
   else if(email.value == "" || email.value == undefined){
      alert("Please enter the valid email");
      document.getElementById("txtEmail").focus();
      return;
   }
   else{
      
      alert(" You have successfully Signed up");
      window.location.replace("SignInSuccess.html");
   }
}