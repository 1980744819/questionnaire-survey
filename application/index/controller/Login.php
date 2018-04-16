<?php
/**
 * Created by PhpStorm.
 * User: 资霄
 * Date: 2018/4/15
 * Time: 20:31
 */

namespace app\index\controller;
use app\index\model\Users;
use think\Controller;
use think\Request;

class Login extends Controller
{
    public function index(){
        return $this->fetch();
    }
    public function login(){
        var_dump($_POST);
        $post_data=Request::instance()->post();
//        $user=new Users();
//        $user->name=$post_data['name'];
//        $user->password=$post_data['password'];
        if(Users::login($post_data['name'],$post_data['password'])){
            $this->success('success','Manage/index');
        }
        else{
            $this->error('failed');
        }
    }
}