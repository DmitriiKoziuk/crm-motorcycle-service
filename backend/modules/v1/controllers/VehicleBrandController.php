<?php
namespace backend\modules\v1\controllers;

use Yii;
use yii\rest\Controller;
use yii\filters\Cors;
use yii\filters\auth\HttpBearerAuth;
use backend\modules\v1\models\VehicleBrand;
use backend\modules\v1\models\VehicleBrandSearch;
use backend\modules\v1\responses\IndexResponse;
use backend\modules\v1\components\VehicleBrandAction;

class VehicleBrandController extends Controller
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
        $dataProvider = (new VehicleBrandSearch())->by($queryParams);
        return IndexResponse::generate($dataProvider);
    }

    public function actionView($id)
    {
        return VehicleBrand::find()->where(['id' => $id])->one();
    }

    public function actionCreate()
    {
        try {
            $queryParams  = Yii::$app->getRequest()->getBodyParams();
            $vehicleBrand = VehicleBrandAction::create($queryParams);
            return $vehicleBrand;
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function actionUpdate($id)
    {
        try {
            $queryParams  = Yii::$app->getRequest()->getBodyParams();
            $vehicleBrand = VehicleBrandAction::update($id, $queryParams);
            return $vehicleBrand;
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }
}