<?php
namespace backend\modules\v1\controllers;

use Yii;
use yii\rest\Controller;
use yii\filters\Cors;
use yii\filters\auth\HttpBearerAuth;
use backend\modules\v1\components\UserAction;
use backend\modules\v1\models\User;
use backend\modules\v1\models\UserSearch;
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
        $queryParams = Yii::$app->request->get();
        $userSearch  = new UserSearch();
        $users    = $userSearch->search($queryParams)->getModels();
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

    public function actionCreate()
    {
        $s = 'ss';
        return ['m' => 'create'];
    }

    public function actionUpdate($id)
    {
        try {
            UserAction::update(Yii::$app->getRequest()->getBodyParams());
            return ['m' => 'updated'];
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function actionDelete()
    {
        $s = 'ss';
        return ['m' => 'delete'];
    }
}