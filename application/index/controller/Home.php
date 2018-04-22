<?php
/**
 * Created by PhpStorm.
 * User: 资霄
 * Date: 2018/4/15
 * Time: 23:21
 */

namespace app\index\controller;


use app\index\model\Users;


class Home extends Par
{
    public function index(){
//        return 'welcome';
        if(Users::islogin()){
            return $this->error('have not login','Login/index');
        }
    }
}