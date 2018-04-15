var count=0;
$(document).ready(function(){
    $(".name").click(function(){
      count++;
      if(count%2!=0){
        $(this).after("<span class='delete' onclick=name(this)>删除</span>");
      }
      else{
        $(".delete").remove();
      }
    }); 
});
function name($this){
    alert("确认删除！");
    $($this).prev(".name").remove();
    $($this).remove();
}