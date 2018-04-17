<?php
namespace backend\modules\v1\models;

use Yii;
use yii\db\Exception;
use yii\db\Expression;
use yii\rbac\Permission;
use common\models\User as U;
use backend\modules\v1\requests\LoginRequest;
use backend\modules\v1\requests\LoginCheckRequest;

class User extends U
{
    /** @var Permission $role */
    protected $role;
    /** @var Permission[] $permissions */
    protected $permissions;

    public static function login(LoginRequest $request)
    {
        /** @var User $user */
        $user = User::find()
            ->with(['profile'])
            ->where(
                ['username' => new Expression(':username')],
                [':username' => $request->username]
            )->one();

        if (empty($user))
            throw new Exception("User '{$request->username}' not found");

        if (! $user->validatePassword($request->password))
            throw new \Exception("Incorrect username or password");

        return $user;
    }

    public static function checkLogin(LoginCheckRequest $request)
    {
        $user = User::find()
            ->where(
                [
                    'username'     => new Expression(':username'),
                    'access_token' => new Expression(':access_token'),
                ],
                [
                    ':username'     => $request->username,
                    ':access_token' => $request->access_token
                ]
            )->one();

        if (empty($user)) {
            throw new Exception("Access token not found");
        }

        return $user;
    }

    public static function getById($id)
    {
        /** @var User $user */
        $user = User::find()
            ->where(
                ['id'  => new Expression(':id')],
                [':id' => $id]
            )->one();

        if (empty($user))
            throw new Exception("Can't find user with id - {$id}");

        return $user;
    }

    public function getRole()
    {
        if (empty($this->role)) {
            $roles      = Yii::$app->authManager->getRolesByUser($this->id);
            $this->role = array_shift($roles);
        }

        return $this->role;
    }

    public function getPermissions()
    {
        if (empty($this->permissions)) {
            $role = $this->getRole();
            if (! empty($role)) {
                $this->permissions = Yii::$app->authManager->getChildren($role->name);
            }
        }

        return $this->permissions;
    }
}