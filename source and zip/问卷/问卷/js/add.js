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
    if(confirm("确认删除！"))
    {
      $($this).prev(".name").remove();
      $($this).remove();
    }
    else{
      $($this).remove();
    }
}
function add(){
  confirm("确认添加！");
  $(".all").after("<span>xxx</span>");
}