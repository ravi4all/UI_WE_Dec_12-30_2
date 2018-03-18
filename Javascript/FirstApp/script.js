// Event Binding
/*
window.addEventListener("load", function(){
    document.getElementById("btn").addEventListener("click", function(){
        var val = document.getElementById("box_1").value;
        document.getElementById("result").innerHTML = val;
    })
});
*/

window.addEventListener("load", init);

function init(){
    console.log("Init Executed...");
    document.getElementById("btn").addEventListener("click",greet);
}


function greet(){
    console.log("Greet Executed...");
    var val = document.getElementById("box_1").value;
    document.getElementById("result").innerHTML = val;
}