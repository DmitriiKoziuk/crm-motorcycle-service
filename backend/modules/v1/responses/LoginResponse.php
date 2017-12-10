<?php
namespace backend\modules\v1\responses;

use yii\base\Model;
use backend\modules\v1\models\User;
use common\models\UserProfile;

class LoginResponse extends Model
{
    public $id;
    public $username;
    public $access_token;
    public $profile;
    public $role;
    public $permissions;

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

    public function setData(User $user)
    {
        $this->setAttributes($user->getAttributes());
        $this->profile     = $user->profile;
        $this->role        = $user->getRole();
        $this->permissions = $user->getPermissions();

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