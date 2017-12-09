<?php
namespace backend\modules\v1\responses;

use yii\base\Model;
use backend\modules\v1\models\User;

class UserGetResponse extends Model
{
    /** @var User[] $users */
    public $users;

    public function rules()
    {
        return []; //TODO add rules
    }

    public function setData(array $users)
    {
        foreach ($users as $key => $user) {
            if (! ($user instanceof User)) {
                throw new \Exception("Variable not instance of User");
            }
            $this->users[ $key ]                = $user->getAttributes([
                'id', 'username', 'email',  'status', 'created_at', 'updated_at'
            ]);
            $this->users[ $key ]['profile']     = $user->profile;
            $this->users[ $key ]['role']        = $user->getRole();
            $this->users[ $key ]['permissions'] = $user->getPermissions();
        }

        return $this;
    }

    public function validateData()
    {
        if (! $this->validate()) {
            throw new \Exception(json_encode($this->getErrors()));
        }

        return $this;
    }

    public function getResponse()
    {
        return $this->users;
    }
}