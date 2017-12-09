<?php
namespace console\controllers;

use Yii;
use yii\console\Controller;
use yii\helpers\Console;
use console\models\User;

class UserController extends Controller
{
    public function actionIndex()
    {
        echo 'Hello' . "\n";
    }

    public function actionCreate($username, $email = null)
    {
        if (empty($email)) {
            $email = 'someFakeEmail' . rand(10, 10000);
        }

        try {
            $password = Yii::$app->security->generateRandomString(10);

            User::create($username, $email, $password);

            $this->stdout("User created, name - '{$username}', password - '{$password}'.\n", Console::FG_GREEN);

            return 0;
        } catch (\Exception $e) {
            $this->stdout($e->getMessage() . "\n", Console::FG_RED);
            return 1;
        }
    }

    public function actionDelete($username)
    {
        try {
            $user = User::find()
                ->where(['username' => $username])
                ->one();

            if (empty($user)) {
                throw new \Exception("User with name '{$username}' do not exist.");
            }

            $user->delete();

            $this->stdout("User '{$username}' is deleted.\n", Console::FG_GREEN);
            return 0;
        } catch (\Exception $e) {
            $this->stdout($e->getMessage() . "\n", Console::FG_RED);
            return 1;
        }
    }
}