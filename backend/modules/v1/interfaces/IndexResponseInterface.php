<?php
namespace backend\modules\v1\interfaces;

use yii\data\ActiveDataProvider;

interface IndexResponseInterface
{
    public static function generate(ActiveDataProvider $dataProvider);
}