<?php
namespace backend\modules\v1\requests;

use yii\base\Model;

class LoginCheckRequest extends Model
{
    public $username;
    public $access_token;

    public function rules()
    {
        return [
            [['username', 'access_token'], 'required'],
            [['username', 'access_token'], 'string']
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