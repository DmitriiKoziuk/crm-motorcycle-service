<?php
namespace backend\models;

use yii\db\Exception;
use common\models\User as U;

class User extends U {
    public static function create($username, $email, $password) {
        $user           = new static();
        $user->username = $username;
        $user->email    = $email;
        $user->setPassword($password);
        $user->generateAuthKey();
        $user->generateAccessToken();

        if (! $user->validate()) {
            throw new \Exception('Not valid data');
        }

        if (! $user->save()) {
            throw new Exception("Can't save user");
        }

        return true;
    }
}