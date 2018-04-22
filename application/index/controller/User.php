<?php
/**
 * Created by PhpStorm.
 * User: 资霄
 * Date: 2018/4/18
 * Time: 19:29
 */

namespace app\index\controller;


use think\Controller;
use app\index\model\Users;
use think\Request;

class User extends Controller
{
    public function index()
    {
        return $this->fetch();
    }

    public function register()
    {
        return $this->fetch();
    }

    public function register_validate()
    {
        var_dump($_POST);
        $post_data = Request::instance()->post();
//        $user_find = Users::where('name', $post_data['name'])->find();
//        return $user_find;
        if (Users::isregistered($post_data['name'])) {
            $this->error('user already exits.', 'register');
        }
        $user = new Users();
        $user->name = $post_data['name'];
        $user->password = $post_data['password1'];
//        $user->password_confirm=$post_data['password2'];
        $user->introduction = 'odrinary user';
        if ($user->save()) {
            $this->success('success', 'user/login');
        } else {
            $this->error('failed');
        }
    }

    public function login()
    {
        return $this->fetch();
    }

    public function login_validate()
    {
        var_dump($_POST);
        $post_data = Request::instance()->post();
//        $user=new Users();
//        $user->name=$post_data['name'];
//        $user->password=$post_data['password'];
        if (Users::login($post_data['name'], $post_data['password'])) {
            $this->success('success', 'Manage/index');
        } else {
            $this->error('failed');
        }
    }

    public function logout()
    {
        Users::logout();
        $this->success('success','user/login');
    }
    public function information(){
        return $this->fetch();
    }
    public function changepassword(){
        return $this->fetch();
    }

    public function changepassword_validate()
    {
        var_dump($_POST);
        $post_data=Request::instance()->post();
        if(Users::changepassword($post_data['old'],$post_data['new'])){
            return $this->success('success','login');
        }
        else{
            return $this->error('old password is not right','changepassword');
        }
    }
}