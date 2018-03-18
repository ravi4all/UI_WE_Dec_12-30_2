window.addEventListener("load", init);

var first_num;
var second_num;

function init(){
    first_num = document.getElementById("box_1");
    second_num = document.getElementById("box_2");
    span = document.getElementById("result");
    buttons = document.getElementsByTagName("button");
    for(var i=0; i<buttons.length;i++){
        buttons[i].addEventListener("click", calc);
    }
}

function calc(){
    // var elem = event.srcElement;
    var opr = event.srcElement.value;
    // opr = +/-/
    // console.log(elemValue);
    var expression = first_num.value + opr + second_num.value;
    result = eval(expression);
    span.innerHTML = result;
}