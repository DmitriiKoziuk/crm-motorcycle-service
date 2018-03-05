<?php
namespace backend\modules\v1\controllers;

use Yii;
use yii\rest\Controller;
use yii\filters\Cors;
use yii\filters\auth\HttpBearerAuth;
use backend\modules\v1\models\VehicleType;
use backend\modules\v1\models\VehicleTypeSearch;
use backend\modules\v1\responses\IndexResponse;
use backend\modules\v1\components\VehicleTypeAction;

class VehicleTypeController extends Controller
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
        $dataProvider = (new VehicleTypeSearch())->by($queryParams);
        return IndexResponse::generate($dataProvider);
    }

    public function actionView($id)
    {
        return VehicleType::find()->where(['id' => $id])->one();
    }

    public function actionCreate()
    {
        try {
            $queryParams = Yii::$app->getRequest()->getBodyParams();
            $vehicleType = VehicleTypeAction::create($queryParams);
            return $vehicleType;
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function actionUpdate($id)
    {
        try {
            $queryParams = Yii::$app->getRequest()->getBodyParams();
            return VehicleTypeAction::update($id, $queryParams);
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }
}