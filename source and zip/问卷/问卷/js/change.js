$(document).ready(function(){
	var index = 1;
	var line_box ='<div class="line_box" style="border: 1px solid #fff;"></div>';
    var num = $(".addhere").find(".line_box").length + 1;

    var head_list = '<ul class="head_list"></ul>';
    var name = "【单选】";
    head_list = $(head_list).append('<li><div class="head_title"><strong class="num">' + num + '</strong>. <strong class="bianji">请编辑问题</strong><strong class="tip">' + name + '</strong></div></li>');
    line_box = $(line_box).append(head_list);
    line_box = $(line_box).append('<div class="box_xh" data-t="' + index + '"></div>');
    $(".div_single").hover(function(){
    	var html = "<div class='group_button'><a href='javascript:void(0)'  class='bj'>编辑</a><a href='javascript:void(0)' class='sy'>上移</a><a href='javascript:void(0)'  class='xy'>下移</a><a href='javascript:void(0)' class='del' >删除</a></div>"
        $(this).css({
            "border": "1px solid #0099ff"
        });
            
        $(this).children(".head_list").after(html);}, 
        function(){
            $(this).css({"border": "1px solid #fff"});
            $(this).children(".group_button").remove();
        });
        $(".addhere").append(line_box);
});