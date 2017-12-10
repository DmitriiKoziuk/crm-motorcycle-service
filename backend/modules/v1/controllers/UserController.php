<?php
namespace backend\modules\v1\controllers;

use yii\rest\Controller;
use yii\filters\Cors;
use yii\filters\auth\HttpBearerAuth;
use backend\modules\v1\models\User;
use backend\modules\v1\responses\UserGetResponse;
use backend\modules\v1\responses\UserResponse;

class UserController extends Controller
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class'  => HttpBearerAuth::className(),
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
        $users    = User::find()
            ->with(['profile'])
            ->all();
        $response = (new UserGetResponse())
            ->setData($users)
            ->validateData()
            ->getResponse();

        return $response;
    }

    public function actionView($id)
    {
        $response = [];

        try {
            $response = (new UserResponse())
                ->setData(User::getById($id))
                ->validateData();
        } catch (\Exception $e) {
            $response['error'] = $e->getMessage();
        }

        return $response;
    }
}