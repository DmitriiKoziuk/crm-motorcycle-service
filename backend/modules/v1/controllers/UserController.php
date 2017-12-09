<?php
namespace backend\modules\v1\controllers;

use yii\rest\Controller;
use yii\filters\Cors;
use yii\filters\auth\HttpBearerAuth;
use backend\modules\v1\models\User;

class UserController extends Controller
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => HttpBearerAuth::className(),
            'except' => ['options'],
        ];
        $behaviors['corsFilter'] = [
            'class' => Cors::className(),
        ];

        return $behaviors;
    }

    public function actions()
    {
        return [
            'options' => [
                'class' => 'yii\rest\OptionsAction',
            ],
        ];
    }

    public function actionIndex()
    {
        $data = [];
        /** @var User[] $users */
        $users = User::find()
            ->with(['profile'])
            ->all();

        foreach ($users as $key => $user) {
            $data[ $key ] = $user->getAttributes();
            $data[ $key ]['profile'] = $user->profile;
        }

        return $data;
    }
}