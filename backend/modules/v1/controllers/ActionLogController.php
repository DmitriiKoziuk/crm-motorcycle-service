<?php
namespace backend\modules\v1\controllers;

use yii\rest\Controller;
use yii\filters\Cors;
use yii\filters\auth\HttpBearerAuth;

class ActionLogController extends Controller
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class'  => HttpBearerAuth::class,
            'except' => ['options'],
        ];
        $behaviors['corsFilter'] = [
            'class' => Cors::class,
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
        return ['m' => 'index'];
    }

    public function actionView($id)
    {
        return ['m' => 'view - ' . $id];
    }

    public function actionCreate()
    {
        return ['m' => 'create'];
    }

    public function actionUpdate($id)
    {
        return ['m' => 'update - ' . $id];
    }

    public function actionDelete($id)
    {
        return ['m' => 'delete - ' . $id];
    }
}