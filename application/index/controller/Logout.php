<?php
/**
 * Created by PhpStorm.
 * User: 资霄
 * Date: 2018/4/15
 * Time: 23:22
 */

namespace app\index\controller;


use app\index\model\Users;
use think\Controller;

class Logout extends Controller
{
    public function logout(){
        Users::logout();
        $this->success('success','Login/index');
    }
}