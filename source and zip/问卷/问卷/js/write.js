var count=0;
$(document).ready(function(){
    $(".sort_name").click(function(){
        count++;
        $(this).before("<span class='count'>"+count+"</span>");
        $(this).attr("pointer-events","none");
    });
    $(".clear").click(function(){
        $(".count").remove();
        count=0;
    });
})