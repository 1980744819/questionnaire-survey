<?php
/**
 * Created by PhpStorm.
 * User: 资霄
 * Date: 2018/4/18
 * Time: 8:41
 */

namespace app\index\controller;


use app\index\model\Users;
use think\Controller;

class Par extends Controller
{
    public function __construct()
    {
        parent::__construct();
        if(!Users::islogin()){
            return $this->error('have not login','user/login');
        }
    }

    public function index()
    {
        return 'welcome';
    }
}