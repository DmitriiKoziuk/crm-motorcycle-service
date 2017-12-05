<?php
namespace backend\modules\v1\controllers;

use Yii;
use yii\db\Exception;
use yii\rest\Controller;
use yii\filters\Cors;
use backend\forms\LoginForm;
use backend\models\User;

class LoginController extends Controller
{
    public function behaviors()
    {
        $behaviours = parent::behaviors();
        $behaviours['corsFilter'] = [
            'class' => Cors::className(),
        ];

        return $behaviours;
    }

    public function actions()
    {
        return [
            'options' => [
                'class' => 'yii\rest\OptionsAction',
            ],
        ];
    }

    public function actionCreate()
    {
        $answer = [];

        try {
            $loginForm = new LoginForm();
            $loginForm->setAttributes(Yii::$app->getRequest()->getBodyParams());

            if (! $loginForm->validate())
                throw new \Exception("Username Or Password not valid");

            /** @var User $user */
            $user = User::find()
                ->where([
                    'username' => $loginForm->username
                ])->one();

            if (empty($user))
                throw new Exception("User '{$loginForm->username}' not found");

            if (! $user->validatePassword($loginForm->password))
                throw new \Exception("Incorrect password");

            $answer['message']      = "Hello {$user->username}";
            $answer['access-token'] = $user->access_token;

        } catch (\Exception $e) {
            $answer['error'] = $e->getMessage();
        }

        return $answer;
    }
}