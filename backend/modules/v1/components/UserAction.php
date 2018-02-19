<?php
namespace backend\modules\v1\components;

use Yii;
use yii\db\Exception;
use yii\db\Expression;
use backend\modules\v1\models\User;

class UserAction
{
    /**
     * @param $userData
     * @return bool
     * @throws \yii\db\Exception
     */
    public static function update(array $userData)
    {
        $transaction = Yii::$app->db->beginTransaction();

        try {
            /** @var User $user */
            $user = User::find()
                ->with(['profile'])
                ->where(
                    ['id' => new Expression(':id')],
                    [':id' => $userData['id']]
                )->one();

            if (empty($user)) {
                throw new Exception("Can`t find user with id {$userData['id']}");
            }

            if ($user->username != $userData['username']) {
                $user->username = $userData['username'];
            }

            if (! empty($userData['password'])) {
                $user->setPassword($userData['password']);
                $user->generateAuthKey();
                $user->generateAccessToken();
            }

            if (! $user->validate()) {
                throw new \Exception('Not valid data');
            }

            if (! $user->save()) {
                throw new \Exception("Can't save user");
            }

            $user->profile->setAttributes($userData['profile']);

            if (! $user->profile->validate()) {
                throw new \Exception('Not valid user profile data');
            }

            if (! $user->profile->save()) {
                throw new \Exception("Can't save user profile");
            }

            $userRoles = Yii::$app->authManager->getRolesByUser($user->id);

            if (! array_key_exists($userData['role']['name'], $userRoles)) {
               if (0 != count($userRoles)) {
                   Yii::$app->authManager->revokeAll($user->id);
               }

                $role = Yii::$app->authManager->getRole($userData['role']['name']);

                if (empty($role)) {
                    throw new \Exception("Role '{$userData['role']['name']}' do not exist");
                }

                Yii::$app->authManager->assign($role, $user->id);
            }

            $transaction->commit();
        } catch (\Exception $e) {
            $transaction->rollBack();
        }

        return true;
    }
}