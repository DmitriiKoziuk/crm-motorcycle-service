<?php
namespace backend\modules\v1\controllers;

use Yii;
use yii\rest\Controller;
use yii\filters\Cors;
use yii\filters\auth\HttpBearerAuth;
use backend\modules\v1\models\VehicleSearch;
use backend\modules\v1\responses\VehicleIndexResponse;

class VehicleController extends Controller
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
        $queryParams  = Yii::$app->request->get();
        $dataProvider = (new VehicleSearch())->by($queryParams);
        return VehicleIndexResponse::generate($dataProvider);
    }
}