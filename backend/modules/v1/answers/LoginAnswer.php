<?php
namespace backend\modules\v1\answers;

use backend\modules\v1\models\User;

class LoginAnswer
{
    public static function get(User $user)
    {
        return [
            'message'      => "Hello {$user->username}",
            'id'           => $user->id,
            'username'     => $user->username,
            'access_token' => $user->access_token,
            'profile'      => $user->profile,
        ];
    }
}