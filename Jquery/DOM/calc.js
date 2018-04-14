$(document).ready(function(){

    var f_num = $("#box_1");
    var s_num = $("#box_2");

    $("button").click(function(){
        var opr = $(this).val();
        var expression = f_num.val() + opr + s_num.val();
        var result = eval(expression);
        $("span").html(result);
    })

})