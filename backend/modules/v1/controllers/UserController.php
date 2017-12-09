<?php
namespace backend\modules\v1\controllers;

use yii\rest\Controller;
use yii\filters\Cors;
use backend\modules\v1\models\User;

class UserController extends Controller
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