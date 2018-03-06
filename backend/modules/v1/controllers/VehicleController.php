<?php
namespace backend\modules\v1\controllers;

use Yii;
use yii\db\Expression;
use yii\rest\Controller;
use yii\filters\Cors;
use yii\filters\auth\HttpBearerAuth;
use backend\modules\v1\models\Vehicle;
use backend\modules\v1\models\VehicleSearch;
use backend\modules\v1\components\VehicleAction;
use backend\modules\v1\components\VehicleTypeAction;
use backend\modules\v1\components\VehicleBrandAction;
use backend\modules\v1\responses\VehicleIndexResponse;
use backend\modules\v1\responses\ViewResponse;
use backend\modules\v1\responses\CreateResponse;

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

    public function actionView($id)
    {
        try {
            $vehicle = Vehicle::find()
                ->where(['id' => new Expression(':id')], [':id' => $id])
                ->one();
            if (empty($vehicle)) {
                throw new \Exception('Can`t find vehicle with id: ' . $id);
            }
            return ViewResponse::generate($vehicle, ['id', 'type', 'brand', 'model_name']);
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function actionCreate()
    {
        try {
            $queryParams  = Yii::$app->getRequest()->getBodyParams();
            $vehicleType  = VehicleTypeAction::findOrCreate(
                $queryParams['type']['id'],
                $queryParams['type']['name']
            );
            $vehicleBrand = VehicleBrandAction::findOrCreate(
                $queryParams['brand']['id'],
                $queryParams['brand']['name']
            );
            $vehicle      = VehicleAction::create(
                $queryParams['model_name'],
                $vehicleType,
                $vehicleBrand
            );
            return CreateResponse::generate($vehicle);
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }
}