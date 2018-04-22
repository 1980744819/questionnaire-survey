function del($this)
{
    if(confirm("确认删除！"))
    {
      $($this).parents(".table").remove();
    }
}