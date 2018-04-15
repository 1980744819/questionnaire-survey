<?php
/**
 * Created by PhpStorm.
 * User: 资霄
 * Date: 2018/4/15
 * Time: 21:12
 */

namespace app\index\model;

use think\Model;
class Users extends Model
{
    protected $table='think_users';
    static public function login($name,$password){
        $user=self::where('name',$name)->find();
        if(is_null($user))
            return false;
        if($user->getData('password')!=$password)
            return false;
        session('user_id',$user->getData('id'));
        return true;
    }
    static public function logout(){
        session('user_id',null);
    }

}