window.addEventListener("load", init);

var username;
var usermail;
var userpwd;
var confpwd;

function init(){
    username = document.getElementById("box_1");
    usermail = document.getElementById("box_2");
    userpwd = document.getElementById("box_3");
    confpwd = document.getElementById("box_4");
    span = document.getElementsByTagName("span");
    username.addEventListener("blur", blankCheck);
    usermail.addEventListener("keyup", validateEmail);
}

function blankCheck(){
    /*
    if(username.value.length == 0){
        span[0].innerHTML = "This field is required";
        username.className = "error";
    }
    else {
        span[0].innerHTML = "";
        username.className = "success";
    }
    */
    if(isEmpty()){
        span[0].innerHTML = "This field is required";
        username.className = "error";
    }
    else {
        span[0].innerHTML = "";
        username.className = "success";
    }
}

function isEmpty(){
    return (username.value == undefined || username.value == null || username.value == "") ? true : false;
}

function validateEmail(){
    // var pattern = /([a-z | A-Z])\w+[@]\w+[.]\w+/.test(usermail.value);
    var pattern = /([a-z | A-Z])\w+[@]\w+[.]\w+[com | in]/.test(usermail.value);
    // console.log(pattern);
    if(pattern) {
        span[1].innerHTML = "Valid";
    }
    else {
        span[1].innerHTML = "Invalid EmailId";
    }
}