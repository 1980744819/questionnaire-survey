$(document).ready(function(){
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
            var html = "<div class='group_button'><a href='javascript:void(0)'  class='bj'>编辑</a><a href='javascript:void(0)' class='sy'>上移</a><a href='javascript:void(0)'  class='xy'>下移</a><a href='javascript:void(0)' class='del' >删除</a></div>"
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
            var html = "<div class='group_button'><a href='javascript:void(0)'  class='bj'>编辑</a><a href='javascript:void(0)' class='sy'>上移</a><a href='javascript:void(0)'  class='xy'>下移</a><a href='javascript:void(0)' class='del' >删除</a></div>"
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
            var html = "<div class='group_button'><a href='javascript:void(0)'  class='bj'>编辑</a><a href='javascript:void(0)' class='sy'>上移</a><a href='javascript:void(0)'  class='xy'>下移</a><a href='javascript:void(0)' class='del' >删除</a></div>"
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
            var html = "<div class='group_button'><a href='javascript:void(0)'  class='bj'>编辑</a><a href='javascript:void(0)' class='sy'>上移</a><a href='javascript:void(0)'  class='xy'>下移</a><a href='javascript:void(0)' class='del' >删除</a></div>"
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

    $("body").on("click", ".xy", function(){
        //文字的长度
        var length = $(".addhere").children(".line_box").length;
        var now = $(this).parent(".group_button").parent(".line_box").index();
        if(now < length - 1){
            var temp = $(this).parent(".group_button").parent(".line_box");
            var xy = temp.next().html();
            var sy = temp.html();
            temp.next().html(sy);
            temp.html(xy);
            //序号
            temp.children(".head_list").find(".num").text(now + 1);
            temp.next().children(".head_list").find(".num").text(now + 2);
        }
        else{alert("到底了");}
    });

    $("body").on("click", ".sy", function(){
        var now = $(this).parent(".group_button").parent(".line_box").index();
        if(now > 0){
            var temp = $(this).parent(".group_button").parent(".line_box");
            var xy = temp.prev().html();
            var sy = temp.html();
            temp.prev().html(sy);
            temp.html(xy);
            //序号
            temp.children(".head_list").find(".num").text(now + 1);
            temp.prev().children(".head_list").find(".num").text(now);
        } 
        else{alert("到头了");}
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
            xh.show().html(tm_single);
            var choice_num = xh.find(".big_contend").children(".contend").length;
            var html = xh.find(".big_contend").children(".contend").html();
            //添加选项
            for(var i = choice_num; i < timlrxm - 1; i++){
                xh.find(".big_contend").append("<div class='contend'>" + html + "</div>");
                }
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
            xh.show().html(tm_checkbox);
            var choice_num = xh.find(".big_contend").children(".contend").length;
            var html = xh.find(".big_contend").children(".contend").html();
            //添加选项
            for(var i = choice_num; i < timlrxm - 1; i++) {
                xh.find(".big_contend").append("<div class='contend'>" + html + "</div>");
                }
            //题目标题
            var bt_val = $(this).parent(".group_button").parent(".line_box").find(".head_list").children("li").eq(0).find(".head_title").children(".bianji").text();
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
            xh.show().html(tm_question);
            //题目标题
            var bt_val = $(this).parent(".group_button").parent(".line_box").find(".head_list").children("li").eq(0).find(".head_title").children(".bianji").text();
            xh.find(".bt").val(bt_val);
        }

        //排序题
        if(title == 4)
        {
            xh.show().html(tm_checkbox);
            var choice_num = xh.find(".big_contend").children(".contend").length;
            var html = xh.find(".big_contend").children(".contend").html();
            //添加选项
            for(var i = choice_num; i < timlrxm - 1; i++) {
                xh.find(".big_contend").append("<div class='contend'>" + html + "</div>");
                }
            //题目标题
            var bt_val = $(this).parent(".group_button").parent(".line_box").find(".head_list").children("li").eq(0).find(".head_title").children(".bianji").text();
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
    });



    //增加选项  
    $("body").on("click", ".add_choice", function(){
        var zjxx_html = $(this).prev(".big_contend").children(".contend").html();
        $(this).prev(".big_contend").append("<div class='contend'>" + zjxx_html + "</div>");
    });

    //删除选项 
    $("body").on("click", ".del_choice", function(){
        //获取编辑题目的个数
        var zuxxs_num = $(this).parent(".contend").parent(".big_contend").children(".contend").length;
        if(zuxxs_num > 1) {
            $(this).parent(".contend").remove();
            $(".group_button").remove();
        } 
        else {alert("没的删了");}
    });

    //取消编辑
    $("body").on("click", ".box_xh .cancel", function(){
        $(this).parent(".box_bianji").parent(".box_xh").empty().hide();
        $(".line_box").css({"border": "1px solid #fff"});
        $(".group_button").remove();
    });


    //完成编辑
    $("body").on("click", ".save", function(){
        var tou = $(this).parent(".box_bianji").parent(".box_xh");
        var questiontype = tou.attr("data-t");
        switch(questiontype) {
            case "1": //单选
            case "2": //多选
            var xmtit_length = tou.parent(".line_box").children(".head_list").children("li").length - 1; //题目选择的个数

            var tm = tou.find(".bt").val();
            tou.parent(".line_box").children(".head_list").children("li").eq(0).find(".head_title").children(".bianji").text(tm);

            //删除多余选项
            for(var i = xmtit_length; i > 0; i--) {
                tou.parent(".line_box").children(".head_list").children("li").eq(i).remove();
            }

            tou.children(".big_contend").children(".contend").each(function(){
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
                var bt_val_bj = tou.find(".bt").val(); //获取问题题目
                tou.parent(".line_box").children(".head_list").children("li").eq(0).find(".head_title").children(".bianji").text(bt_val_bj); //将修改过的问题题目展示
                break;

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
                    tou.parent(".line_box").children(".head_list").children("table").children("tbody").append(tr + td);
                }
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