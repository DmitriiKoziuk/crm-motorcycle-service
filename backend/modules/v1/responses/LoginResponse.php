<?php
namespace backend\modules\v1\responses;

use yii\base\Model;
use common\models\User;
use common\models\UserProfile;

class LoginResponse extends Model
{
    public function rules()
    {
        return [
            [['username', 'access_token', 'id', 'profile'], 'required'],
            [['username', 'access_token'], 'string'],
            [['id'], 'integer'],
            ['profile', function ($attribute) {
                if (! ($this->$attribute instanceof UserProfile)) {
                    $this->addError($attribute, "Attribute {$attribute} is invalid.");
                }
            }]
        ];
    }

    public $id;
    public $username;
    public $access_token;
    public $profile;

    public function loadData(User $user)
    {
        $this->setAttributes($user->getAttributes());
        $this->profile = $user->profile;

        return $this;
    }

    public function validateResponse()
    {
        if (! $this->validate()) {
            throw new \Exception(json_encode($this->getErrors()));
        }

        return $this;
    }
}