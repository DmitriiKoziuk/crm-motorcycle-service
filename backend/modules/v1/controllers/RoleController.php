<?php
namespace backend\modules\v1\controllers;

use yii\rest\Controller;
use yii\filters\Cors;
use yii\filters\auth\HttpBearerAuth;
use backend\modules\v1\models\Role;
use backend\modules\v1\responses\RoleListResponse;

class RoleController extends Controller
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
        $response = [];

        try {
            $response = (new RoleListResponse())
                ->setData(Role::getAll())
                ->validateData()
                ->getResponse();
        } catch (\Exception $e) {
            $response['error'] = $e->getMessage();
        }

        return $response;
    }
}