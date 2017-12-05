<?php
namespace backend\forms;

use yii\base\Model;

class LoginForm extends Model
{
    public $username;
    public $password;

    public function rules()
    {
        return [
            [['username', 'password'], 'string', 'min' => 5, 'max' => 10],
        ];
    }
}