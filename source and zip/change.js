$(document).ready(function(){
	$(".line_box").hover(function(){ 
		var	html = "<div class='group_button'><a href='javascript:void(0)'  class='bj'>编辑</a><a href='javascript:void(0)' class='sy'>上移</a><a href='javascript:void(0)'  class='xy'>下移</a><a href='javascript:void(0)' class='del' >删除</a></div>" 
	 		 $(this).css({"border":"1px solid #0099ff"}); 
			 $(this).children(".head_list").after(html);
			},function(){ 
				$(this).css({"border":"1px solid #fff"}); 
				$(this).children(".group_button").remove();
			});	
});