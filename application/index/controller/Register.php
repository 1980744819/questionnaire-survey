<?php
/**
 * Created by PhpStorm.
 * User: 资霄
 * Date: 2018/4/15
 * Time: 21:04
 */

namespace app\index\controller;

use think\Controller;
use think\Request;
use app\index\model\Users;

class Register extends Controller
{
    public function index()
    {
        return $this->fetch();
    }

    public function add()
    {
        var_dump($_POST);
        $post_data = Request::instance()->post();
        $user_find=Users::where('name',$post_data['name'])->find();
//        return $user_find;
        if($user_find){
            $this->error('user already exits.','Register/index');
        }
        $user = new Users();
        $user->name = $post_data['name'];
        $user->password = $post_data['password1'];
//        $user->password_confirm=$post_data['password2'];
        $user->introduction='odrinary user';
        if($user->save()){
            $this->success('success','Login/index');
        }
        else{
            $this->error('failed');
        }
    }
}