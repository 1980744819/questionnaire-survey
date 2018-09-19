$(document).ready(function(){

    var numq=0;//所有选项的个数
var count=0;//题目的个数
var temp, temp2, temp3, temp4;
var question=new Array(),type=new Array(),choice=new Array(),sum=new Array();
for(var o=0; o<20; o++)
{
    question[o] = "qustion"+o;
    type[o] = "type"+o;
    choice[o] = "choice"+o;
    sum[o] = "sum"+o;
}
    $("#single").click(function(){
        var index = 1;
        var line_box ='<div class="line_box" style="border: 1px solid #fff;"></div>';
        var num = $(".addhere").find(".line_box").length + 1;

        var head_list = '<ul class="head_list"></ul>';
        var name = "【单选】";
        head_list = $(head_list).append('<li><div class="head_title"><strong class="num">' + num + '</strong>. <strong class="bianji">请编辑问题</strong><strong class="tip">' + name + '</strong></div></li>');
        line_box = $(line_box).append(head_list);
        line_box = $(line_box).append('<div class="box_xh" data-t="' + index + '"></div>');

        $(line_box).hover(function(){
            var html = "<div class='group_button'><a href='javascript:void(0)'  class='bj'>编辑</a><a href='javascript:void(0)' class='del' >删除</a></div>"
            $(this).css({
                "border": "1px solid #0099ff"
            });
            $(this).children(".head_list").after(html);
            }, function(){
                $(this).css({"border": "1px solid #fff"});
                $(this).children(".group_button").remove();
            });
            $(".addhere").append(line_box);
    });

    $("#checkbox").click(function(){
        var index = 2;
        var line_box ='<div class="line_box" style="border: 1px solid rgb(255, 255, 255);"></div>';
        var num = $(".addhere").find(".line_box").length + 1;

        var head_list = '<ul class="head_list"></ul>';
        var name = "【多选】";
        head_list = $(head_list).append('<li><div class="head_title"><strong class="num">' + num + '</strong>. <strong class="bianji">请编辑问题</strong><strong class="tip">' + name + '</strong></div></li>');
        line_box = $(line_box).append(head_list);
        line_box = $(line_box).append('<div class="box_xh" data-t="' + index + '"></div>');

        $(line_box).hover(function(){
            var html = "<div class='group_button'><a href='javascript:void(0)'  class='bj'>编辑</a><a href='javascript:void(0)' class='del' >删除</a></div>"
            $(this).css({
                "border": "1px solid #0099ff"
            });
            
            $(this).children(".head_list").after(html);
            }, function(){
                $(this).css({"border": "1px solid #fff"});
                $(this).children(".group_button").remove();
            });
            $(".addhere").append(line_box);
    });


    $("#question").click(function(){
        var index = 3;
        var line_box ='<div class="line_box" style="border: 1px solid rgb(255, 255, 255);"></div>';
        var num = $(".addhere").find(".line_box").length + 1;

        var head_list = '<ul class="head_list"></ul>';
        var name = "【简答】";
        head_list = $(head_list).append('<li><div class="head_title"><strong class="num">' + num + '</strong>. <strong class="bianji">请编辑问题</strong><strong class="tip">' + name + '</strong></div></li>');
        head_list = $(head_list).append('<li><label><textarea class="inputk bt"></textarea></label></li>');
        line_box = $(line_box).append(head_list);
        line_box = $(line_box).append('<div class="box_xh" data-t="' + index + '"></div>');

        $(line_box).hover(function(){
            var html = "<div class='group_button'><a href='javascript:void(0)'  class='bj'>编辑</a><a href='javascript:void(0)' class='del' >删除</a></div>"
            $(this).css({
                "border": "1px solid #0099ff"
            });
            
            $(this).children(".head_list").after(html);
            }, function(){
                $(this).css({"border": "1px solid #fff"});
                $(this).children(".group_button").remove();
            });
            $(".addhere").append(line_box);
    });

    $("#order").click(function(){
        var index = 4;
        var line_box ='<div class="line_box" style="border: 1px solid rgb(255, 255, 255);"></div>';
        var num = $(".addhere").find(".line_box").length + 1;

        var head_list = '<ul class="head_list"></ul>';
        var name = "【排序】";
        head_list = $(head_list).append('<li><div class="head_title"><strong class="num">' + num + '</strong>. <strong class="bianji">请编辑问题</strong><strong class="tip">' + name + '</strong></div></li>');
        line_box = $(line_box).append(head_list);
        line_box = $(line_box).append('<div class="box_xh" data-t="' + index + '"></div>');

        $(line_box).hover(function(){
            var html = "<div class='group_button'><a href='javascript:void(0)'  class='bj'>编辑</a><a href='javascript:void(0)' class='del' >删除</a></div>"
            $(this).css({
                "border": "1px solid #0099ff"
            });
            
            $(this).children(".head_list").after(html);
            }, function(){
                $(this).css({"border": "1px solid #fff"});
                $(this).children(".group_button").remove();
            });
            $(".addhere").append(line_box);
    });



    //删除
    $("body").on("click", ".del", function(){
        var box = $(this).parent(".group_button").parent(".line_box");
        var xh_num = 1;
        //重新编号
        box.parent(".addhere").find(".line_box").each(function(){
            $(".addhere").children(".line_box").eq(xh_num).find(".num").text(xh_num);
            xh_num++;
        });
        box.remove();
    });


    //编辑
    $("body").on("click", ".bj", function(){
        var tm_single = $(".div_single").html();
        var tm_checkbox = $(".div_checkbox").html();
        var tm_question = $(".div_question").html();
        
        var xh = $(this).parent(".group_button").parent(".line_box").find(".box_xh");
        var title = xh.attr("data-t");
        var timlrxm = $(this).parent(".group_button").parent(".line_box").children(".head_list").children("li").length;

        //单选
        if(title == 1){
            var number=numq;
            xh.show().html('<div class="div_single">'+
                '<textarea class="inputk bt dx" placeholder="单选题目" name='+question[count++]+'></textarea>'+
                '<input type="hidden" class="tp" name='+type[count-1]+' value=1></input>'+
		        	'<div class="big_contend">'+
		        		'<div class="contend">'+
		        			'<input type="radio">'+
		        			'<input type="text" class="inputk" placeholder="选项" name='+choice[numq++]+'>'+
		        			'<label>'+
		        				'<input type="checkbox" class="checkbox">'+
		        				'<span class="tk">可填空</span>'+
		        			'</label>'+ 
		        			'<a href="javascript:void(0);" class="del_choice">删除</a>'+
		        		'</div>'+
		        	'</div>'+
		        '<a href="javascript:void(0)" class="add_choice1">增加选项</a>'+
		       	'<div class="box_bianji">'+
		        	'<a href="javascript:void(0);" class="cancel">取消编辑</a>'+
		        	'<a href="javascript:void(0);" class="save"> 完成编辑</a>'+
		        '</div>'+
            '</div>');

            var choice_num = xh.find(".big_contend").children(".contend").length;
            //var html = xh.find(".big_contend").children(".contend").html();
            //添加选项
            for(var i = choice_num; i < timlrxm - 1; i++){
                xh.find(".big_contend").append('<div class="contend">'+
                '<input type="radio">'+
               ' <input type="text" class="inputk" placeholder="选项" name='+choice[numq++]+'>'+
                '<label>'+
                    '<input type="checkbox" class="checkbox">'+
                    '<span class="tk">可填空</span>'+
                '</label>'+
               ' <a href="javascript:void(0);" class="del_choice">删除</a>'+
            '</div>');
            }
            temp = number;
            var bt_val = $(this).parent(".group_button").parent(".line_box").find(".head_list").children("li").eq(0).find(".head_title").children(".bianji").text();
            xh.find(".inputk").val(bt_val);

            var i = 0;
            $(this).parent(".group_button").parent(".line_box").find(".head_list").children("li").each(function(){
                
                var k = $(this).find("input").hasClass("inputk");
                if(k) 
                {
                    var jsxz_kk = $(this).index();
                    xh.find(".big_contend").children(".contend").eq(jsxz_kk - 1).find("label").remove();
                }
                //选项
                var texte_val = $(this).find("span").text();
                xh.find(".big_contend").children(".contend").eq(i - 1).find(".inputk").val(texte_val);
                i++;
            });
        }

        //多选
        if(title == 2) 
        {
            var number=numq;
            xh.show().html('<div class="div_checkbox">'+
            '<textarea class="inputk bt duox" placeholder="多选题目" name='+question[count++]+'></textarea>'+
            '<input type="hidden" class="tp" name='+type[count-1]+' value=2></input>'+
                '<div class="big_contend">'+
                    '<div class="contend">'+
                        '<input type="checkbox">'+
                        '<input type="text" class="inputk" placeholder="选项" name='+choice[numq++]+'>'+
                        '<label>'+
                            '<input type="checkbox" class="checkbox">'+
                            '<span class="tk">可填空</span>'+
                        '</label>'+ 
                        '<a href="javascript:void(0);" class="del_choice">删除</a>'+
                    '</div>'+
                '</div>'+
            '<a href="javascript:void(0)" class="add_choice2">增加选项</a>'+
               '<div class="box_bianji">'+
                '<a href="javascript:void(0);" class="cancel">取消编辑</a>'+
                '<a href="javascript:void(0);" class="save"> 完成编辑</a>'+
            '</div>'+
        '</div>');
            var choice_num = xh.find(".big_contend").children(".contend").length;
            var html = xh.find(".big_contend").children(".contend").html();
            //添加选项
            for(var i = choice_num; i < timlrxm - 1; i++) {
                xh.find(".big_contend").append('<div class="contend">'+
                '<input type="checkbox">'+
               ' <input type="text" class="inputk" placeholder="选项" name='+choice[numq++]+'>'+
                '<label>'+
                    '<input type="checkbox" class="checkbox">'+
                    '<span class="tk">可填空</span>'+
                '</label>'+
               ' <a href="javascript:void(0);" class="del_choice">删除</a>'+
            '</div>');
                }
                temp2 = number;
            //题目标题
            var bt_val = $(this).parents(".group_button").parents(".line_box").find(".head_list").children("li").eq(0).find(".head_title").children(".bianji").text();
            xh.find(".inputk").val(bt_val);
            var i = 0;
            $(this).parent(".group_button").parent(".line_box").find(".head_list").children("li").each(function(){
                //可选框框
                var k = $(this).find("input").hasClass("inputk");
                if(k) 
                {
                    var jsxz_kk = $(this).index();
                    xh.find(".big_contend").children(".contend").eq(jsxz_kk - 1).find("label").remove();
                }
                //选项
                var texte_val = $(this).find("span").text();
                xh.find(".big_contend").children(".contend").eq(i - 1).find(".inputk").val(texte_val);
                i++
            });
        }

        //填空题目
        if(title == 3) 
        {
            var number=numq;
            xh.show().html('<div class="div_question">'+
            '<textarea class="inputk bt jd" placeholder="简答" name='+question[count++]+'></textarea>'+
            '<input type="hidden" class="tp" name='+type[count-1]+' value=3></input>'+
               '<div class="box_bianji">'+
                '<a href="javascript:void(0);" class="cancel">取消编辑</a>'+
                '<a href="javascript:void(0);" class="save"> 完成编辑</a>'+
            '</div>'+
        '</div>');
            //题目标题
            var bt_val = $(this).parent(".group_button").parent(".line_box").find(".head_list").children("li").eq(0).find(".head_title").children(".bianji").text();
            xh.find(".bt").val(bt_val);
            
        }

        //排序题
        if(title == 4)
        {
            var number=numq;
            xh.show().html('<div class="div_checkbox">'+
            '<textarea class="inputk bt duox" placeholder="排序题目" name='+question[count++]+'></textarea>'+
            '<input type="hidden" class="tp" name='+type[count-1]+' value=4></input>'+
                '<div class="big_contend">'+
                    '<div class="contend">'+
                        '<input type="checkbox">'+
                        '<input type="text" class="inputk" placeholder="选项" name='+choice[numq++]+'>'+
                        '<label>'+
                            '<input type="checkbox" class="checkbox">'+
                            '<span class="tk">可填空</span>'+
                        '</label>'+ 
                        '<a href="javascript:void(0);" class="del_choice">删除</a>'+
                    '</div>'+
                '</div>'+
            '<a href="javascript:void(0)" class="add_choice2">增加选项</a>'+
               '<div class="box_bianji">'+
                '<a href="javascript:void(0);" class="cancel">取消编辑</a>'+
                '<a href="javascript:void(0);" class="save"> 完成编辑</a>'+
            '</div>'+
        '</div>');
            var choice_num = xh.find(".big_contend").children(".contend").length;
            var html = xh.find(".big_contend").children(".contend").html();
            //添加选项
            for(var i = choice_num; i < timlrxm - 1; i++) {
                xh.find(".big_contend").append('<div class="contend">'+
                '<input type="checkbox">'+
               ' <input type="text" class="inputk" placeholder="选项" name='+choice[numq++]+'>'+
                '<label>'+
                    '<input type="checkbox" class="checkbox">'+
                    '<span class="tk">可填空</span>'+
                '</label>'+
               ' <a href="javascript:void(0);" class="del_choice">删除</a>'+
            '</div>');
                }
                temp4 = number;
            //题目标题
            var bt_val = $(this).parents(".group_button").parents(".line_box").find(".head_list").children("li").eq(0).find(".head_title").children(".bianji").text();
            xh.find(".inputk").val(bt_val);
            var i = 0;
            $(this).parent(".group_button").parent(".line_box").find(".head_list").children("li").each(function(){
                //可选框框
                var k = $(this).find("input").hasClass("inputk");
                if(k) 
                {
                    var jsxz_kk = $(this).index();
                    xh.find(".big_contend").children(".contend").eq(jsxz_kk - 1).find("label").remove();
                }
                //选项
                var texte_val = $(this).find("span").text();
                xh.find(".big_contend").children(".contend").eq(i - 1).find(".inputk").val(texte_val);
                i++;
            });
        }
    });



    //增加选项  
    //单选
    $("body").on("click", ".add_choice1", function(){
        //var zjxx_html = $(this).prev(".big_contend").children(".contend").html();
        $(this).prev(".big_contend").append("<div class='contend'>" + '<div class="contend">'+
        '<input type="radio">'+
       ' <input type="text" class="inputk" placeholder="选项" name='+choice[numq++]+'>'+
        '<label>'+
            '<input type="checkbox" class="checkbox">'+
            '<span class="tk">可填空</span>'+
        '</label>'+
       ' <a href="javascript:void(0);" class="del_choice">删除</a>'+
    '</div>' +"</div>");
    });
    
    //多选
    $("body").on("click", ".add_choice2", function(){
        //var zjxx_html = $(this).prev(".big_contend").children(".contend").html();
        $(this).prev(".big_contend").append("<div class='contend'>" + '<div class="contend">'+
        '<input type="checkbox">'+
       ' <input type="text" class="inputk" placeholder="选项" name='+choice[numq++]+'>'+
        '<label>'+
            '<input type="checkbox" class="checkbox">'+
            '<span class="tk">可填空</span>'+
        '</label>'+
       ' <a href="javascript:void(0);" class="del_choice">删除</a>'+
    '</div>' + "</div>");
    });

    //删除选项 
    $("body").on("click", ".del_choice", function(){
        //获取编辑题目的个数
        var zuxxs_num = $(this).parents(".contend").parents(".big_contend").children(".contend").length;
        if(zuxxs_num > 1) {
            $(this).parents(".contend").remove();
            $(".group_button").remove();
        } 
        else {alert("没的删了");}
    });

    //取消编辑
    $("body").on("click", ".box_xh .cancel", function(){
        $(this).parents(".box_xh").empty().hide();
        $(".line_box").css({"border": "1px solid #fff"});
        $(".group_button").remove();
    });


    //完成编辑
    $("body").on("click", ".save", function(){
        //var tou = $(this).parent(".box_bianji").parent(".box_xh");
        var tou = $(this).parents(".box_xh");
        var questiontype = tou.attr("data-t");
        switch(questiontype) {
            case "1": //单选
            var vv = numq - temp;
            $(tou).append("<input type='hidden' class='ipt' name="+sum[count-1]+" value="+vv+"></input>");
            var xmtit_length = tou.parents(".line_box").children(".head_list").children("li").length - 1; //题目选择的个数

            var tm = tou.find(".bt").val();
            tou.parents(".line_box").children(".head_list").children("li").eq(0).find(".head_title").children(".bianji").text(tm);
            $(this).parents(".div_single").hide();
            //删除多余选项
            for(var i = xmtit_length; i > 0; i--) {
                tou.parents(".line_box").children(".head_list").children("li").eq(i).remove();
            }
            
            tou.children(".div_single").children(".big_contend").children(".contend").each(function(){
            //选项
                var mes = $(this).find(".inputk").val();
                var inputType = 'radio';
                if(questiontype == "2") {
                    inputType = 'checkbox';
                }
                var li = '<li><label><input name="a" type="' + inputType + '" value=""><span>' + mes + '</span></label></li>';
                tou.parent(".line_box").children(".head_list").append(li);

                //可填空  
                var write = $(this).find(".checkbox").is(':checked');
                if(write){
                    var j = $(this).index();
                    tou.parent(".line_box").children(".head_list").children("li").eq(j + 1).find("span").after("<input name='' type='text' class='inputk'>");
                }
            });

            break;

            case "2": //多选
            var vv = numq - temp2;
            $(tou).append("<input type='hidden' class='ipt' name="+sum[count-1]+" value="+vv+"></input>");
            var xmtit_length = tou.parents(".line_box").children(".head_list").children("li").length - 1; //题目选择的个数

            var tm = tou.find(".bt").val();
            tou.parents(".line_box").children(".head_list").children("li").eq(0).find(".head_title").children(".bianji").text(tm);
            $(this).parents(".div_checkbox").hide();
            //删除多余选项
            for(var i = xmtit_length; i > 0; i--) {
                tou.parents(".line_box").children(".head_list").children("li").eq(i).remove();
            }

            tou.children(".div_checkbox").children(".big_contend").children(".contend").each(function(){
            //选项
                var mes = $(this).find(".inputk").val();
                var inputType = 'radio';
                if(questiontype == "2") {
                    inputType = 'checkbox';
                }
                var li = '<li><label><input name="a" type="' + inputType + '" value=""><span>' + mes + '</span></label></li>';
                tou.parent(".line_box").children(".head_list").append(li);

                //可填空  
                var write = $(this).find(".checkbox").is(':checked');
                if(write){
                    var j = $(this).index();
                    tou.parent(".line_box").children(".head_list").children("li").eq(j + 1).find("span").after("<input name='' type='text' class='inputk'>");
                }
            });

            break;

            case "3"://简答
                $(tou).append("<input type='hidden' class='ipt' name="+sum[count-1]+" value='0'></input>");
                var bt_val_bj = tou.find(".bt").val(); //获取问题题目
                tou.parents(".line_box").children(".head_list").children("li").eq(0).find(".head_title").children(".bianji").text(bt_val_bj); //将修改过的问题题目展示
                $(this).parents(".div_question").hide();
                var y_iteams = y_iteam.split(",");
                for(var item in y_iteams) { //行
                    var tr = '<tr>',
                    td = '';
                    td += '<td>' + y_iteams[item] + '</td>';
                    for(var i = 0; i < x_iteam.length; i++){ //列
                        if(item != 0) {
                            if(x_iteam[i].checkbox){
                                //可填空  
                                td += '<td><input name="c1" type="text" value=""></td>';
                            }
                            else{
                                    var inputType = 'radio';
                                    if(questiontype == "2") {inputType = 'checkbox';}
                                    td += '<td><input name="c1" type="' + inputType + '" value=""> </td>';
                                }
                        } 
                        else{td += '<td>' + x_iteam[i].name + '</td>';}
                    }
                    tou.parents(".line_box").children(".head_list").children("table").children("tbody").append(tr + td);
                }
                break;

                case "4": //排序
                var vv = numq - temp4;
                $(tou).append("<input type='hidden' class='ipt' name="+sum[count-1]+" value="+vv+"></input>");
                var xmtit_length = tou.parents(".line_box").children(".head_list").children("li").length - 1; //题目选择的个数
    
                var tm = tou.find(".bt").val();
                tou.parents(".line_box").children(".head_list").children("li").eq(0).find(".head_title").children(".bianji").text(tm);
                $(this).parents(".div_checkbox").hide();
                //删除多余选项
                for(var i = xmtit_length; i > 0; i--) {
                    tou.parents(".line_box").children(".head_list").children("li").eq(i).remove();
                }
    
                tou.children(".div_checkbox").children(".big_contend").children(".contend").each(function(){
                //选项
                    var mes = $(this).find(".inputk").val();
                    var inputType = 'radio';
                    if(questiontype == "4") {
                        inputType = 'checkbox';
                    }
                    var li = '<li><label><input name="a" type="' + inputType + '" value=""><span>' + mes + '</span></label></li>';
                    tou.parent(".line_box").children(".head_list").append(li);
    
                    //可填空  
                    var write = $(this).find(".checkbox").is(':checked');
                    if(write){
                        var j = $(this).index();
                        tou.parent(".line_box").children(".head_list").children("li").eq(j + 1).find("span").after("<input name='' type='text' class='inputk'>");
                    }
                });
    
                break;
            }

            //清除     
            $(this).parent(".box_bianji").parent(".box_xh").empty().hide();
    });
    $("#mytab a").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    })
});