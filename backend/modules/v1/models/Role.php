<?php
namespace backend\modules\v1\models;

use Yii;

class Role
{
    public static function getAll()
    {
        return Yii::$app->authManager->getRoles();
    }
}