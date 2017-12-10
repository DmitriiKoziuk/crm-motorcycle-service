<?php
namespace backend\modules\v1\controllers;

use Yii;
use yii\rest\Controller;
use yii\filters\Cors;
use backend\modules\v1\models\User;
use backend\modules\v1\requests\LoginRequest;
use backend\modules\v1\responses\LoginResponse;
use backend\modules\v1\requests\LoginCheckRequest;
use backend\modules\v1\responses\LoginCheckResponse;

class LoginController extends Controller
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

    public function actionCreate()
    {
        $response = [];

        try {
            $request  = (new LoginRequest())
                ->setData(Yii::$app->getRequest()->getBodyParams())
                ->validateData();
            $user     = User::login($request);
            $response = (new LoginResponse())
                ->setData($user)
                ->validateData();
        } catch (\Exception $e) {
            $response['error'] = $e->getMessage();
        }

        return $response;
    }

    public function actionCheck()
    {
        $answer = [];
        $method = Yii::$app->getRequest()->getMethod();

        if ($method === 'POST') {
            try {
                $request = (new LoginCheckRequest())
                    ->setData(Yii::$app->getRequest()->getBodyParams())
                    ->validateData();
                $user    = User::checkLogin($request);
                $answer  = new LoginCheckResponse([
                    'message' => 'ok'
                ]);
            } catch (\Exception $e) {
                $answer['error'] = $e->getMessage();
            }
        }

        return $answer;
    }
}