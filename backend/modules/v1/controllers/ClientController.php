<?php
namespace backend\modules\v1\controllers;

use backend\modules\v1\models\Client;
use Yii;
use yii\rest\Controller;
use yii\filters\Cors;
use yii\filters\auth\HttpBearerAuth;
use backend\modules\v1\components\ClientAction;
use backend\modules\v1\models\ClientSearch;
use backend\modules\v1\responses\ClientIndexResponse;
use backend\modules\v1\responses\ClientViewResponse;

class ClientController extends Controller
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
        $dataProvider = (new ClientSearch())->by($queryParams);
        return ClientIndexResponse::generate($dataProvider);
    }

    public function actionView($id)
    {
        /** @var Client $client */
        $client = Client::find()
            ->with([
                'telephones',
                'vehicles.vehicle.type',
                'vehicles.vehicle.brand',
            ])
            ->where(['id' => $id])
            ->one();
        return ClientViewResponse::generate($client);
    }

    public function actionCreate()
    {
        try {
            $queryParams = Yii::$app->getRequest()->getBodyParams();
            $newClient   = ClientAction::create($queryParams);
            return $newClient;
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function actionUpdate($id)
    {
        try {
            $queryParams = Yii::$app->getRequest()->getBodyParams();
            return ClientAction::update($id, $queryParams);
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function actionDelete()
    {
        return ['m' => 'delete do not work.'];
    }
}