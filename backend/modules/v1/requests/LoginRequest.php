<?php
namespace backend\modules\v1\requests;

use yii\base\Model;

class LoginRequest extends Model
{
    public $username;
    public $password;

    public function rules()
    {
        return [
            [['username', 'password'], 'required'],
            [['username', 'password'], 'string', 'min' => 5, 'max' => 10],
        ];
    }

    public function setData(array $data)
    {
        $this->setAttributes($data);
        return $this;
    }

    public function validateData()
    {
        if (! $this->validate()) {
            throw new \Exception(json_encode($this->getErrors()));
        }

        return $this;
    }
}