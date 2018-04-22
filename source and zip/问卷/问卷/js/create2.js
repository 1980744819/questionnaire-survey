$(document).ready(function() {
    $("#single").click(function(){
        var str = '<div id="create_single" class="pages"><div class="name"><form class="bs-example bs-example-form" role="form"><div class="input-group"><span class="input-group-addon">题目</span><input type="text" class="form-control" placeholder="请输入题目"></div><div class="input-group"><span class="input-group-addon">选项</span><input type="text" class="form-control" placeholder="请输入选项"></div><div class="input-group"><span class="input-group-addon">选项</span><input type="text" class="form-control" placeholder="请输入选项"></div><a id="add1" onclick=fun_add1()>添加</a><a id="save1" onclick=fun_save1()>保存</a><a id="delete1" onclick=fun_delete1()>删除</a></form></div></div>';
        $("body").append(str);
        
    });

    $("#checkbox").click(function(){
        var str = '<div id="create_checkbox" class="pages"><div class="name"><form class="bs-example bs-example-form" role="form"><div class="input-group"><span class="input-group-addon">题目</span><input type="text" class="form-control" placeholder="请输入题目"></div><div class="input-group"><span class="input-group-addon">选项</span><input type="text" class="form-control" placeholder="请输入选项"></div><div class="input-group"><span class="input-group-addon">选项</span><input type="text" class="form-control" placeholder="请输入选项"></div><a id="add2" onclick=fun_add2()>添加</a><button class="btn" id="save2">保存</button><button class="btn">删除</button></form></div></div>';
        $("body").append(str);
    });

    $("#order").click(function(){
        var str = '<div id="create_order" class="pages"><div class="name"><form class="bs-example bs-example-form" role="form"><div class="input-group"><span class="input-group-addon">题目</span><input type="text" class="form-control" placeholder="请输入题目"></div><div class="input-group"><span class="input-group-addon">选项</span><input type="text" class="form-control" placeholder="请输入选项"></div><div class="input-group"><span class="input-group-addon">选项</span><input type="text" class="form-control" placeholder="请输入选项"></div><a id="add3" onclick=fun_add3()>添加</button><button class="btn" id="save3">保存</button><button class="btn">删除</button></form></div></div>';
        $("body").append(str);
    });

    $("#question").click(function(){
        var str = '<div id="create_question" class="pages"><div class="name"><form class="bs-example bs-example-form" role="form"><div class="input-group"><span class="input-group-addon">题目</span><input type="text" class="form-control" placeholder="请输入题目"></div><button class="btn">保存</button><button class="btn">删除</button></form></div></div>';
        $("body").append(str);
    });
});

function fun_add1(){
    var str = '<div class="input-group"><span class="input-group-addon">选项</span><input type="text" class="form-control" placeholder="请输入选项"></div>'
    $("#add1").before(str);

};

function fun_add2(){
    var str = '<div class="input-group"><span class="input-group-addon">选项</span><input type="text" class="form-control" placeholder="请输入选项"></div>'
    $("#add2").before(str);
};

function fun_add3(){
    var str = '<div class="input-group"><span class="input-group-addon">选项</span><input type="text" class="form-control" placeholder="请输入选项"></div>'
    $("#add3").before(str);
};

function fun_save1(){
    $("#create_single").html('<div id="create_single" class="pages"><div class="name"><form class="bs-example bs-example-form" role="form"><div class="input-group"><span class="input-group-addon">题目</span><input type="text" class="form-control" placeholder="请输入题目"></div><div class="input-group"><span class="input-group-addon">选项</span><input type="text" class="form-control" placeholder="请输入选项"></div><div class="input-group"><span class="input-group-addon">选项</span><input type="text" class="form-control" placeholder="请输入选项"></div></form></div></div>');

};

function fun_delete1(){
    $("#create_single").remove();
};












