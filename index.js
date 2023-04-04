function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "HGsysadminBE" && password == "R2D2/BB8"){
alert ("Login successfully");
window.location = "/home.html";
}
}