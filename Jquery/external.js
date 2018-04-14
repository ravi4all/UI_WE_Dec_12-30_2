$(document).ready(function(){
    $("button").on("click", show);
})

function show(){
    var username = $("input[type='text']").val();
    $("span").html(username);
}