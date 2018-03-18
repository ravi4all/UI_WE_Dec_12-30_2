window.addEventListener("load", init);

var first_num;
var second_num;

function init(){
    first_num = document.getElementById("box_1");
    second_num = document.getElementById("box_2");
    span = document.getElementById("result");
    document.getElementById("add").addEventListener("click",add);
    document.getElementById("sub").addEventListener("click",sub);
    document.getElementById("div").addEventListener("click",div);
    document.getElementById("mul").addEventListener("click",mul);
}

function add(){
    var result = parseInt(first_num.value) + parseInt(second_num.value);
    span.innerHTML = result;
    // console.log("Values are",first_num,second_num);
    console.log("Result is",result);
}
function sub(){
    var result = parseInt(first_num.value) - parseInt(second_num.value);
    span.innerHTML = result;
    // console.log("Values are",first_num,second_num);
    console.log("Result is",result);
}
function div(){
    var result = parseInt(first_num.value) / parseInt(second_num.value);
    span.innerHTML = result;
    // console.log("Values are",first_num,second_num);
    console.log("Result is",result);
}
function mul(){
    var result = parseInt(first_num.value) * parseInt(second_num.value);
    span.innerHTML = result;
    // console.log("Values are",first_num,second_num);
    console.log("Result is",result);
}