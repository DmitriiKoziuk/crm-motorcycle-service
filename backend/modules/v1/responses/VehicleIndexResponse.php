<?php
namespace backend\modules\v1\responses;

use yii\data\ActiveDataProvider;
use backend\modules\v1\models\Vehicle;

class VehicleIndexResponse extends IndexResponse
{
    protected static function getResult(ActiveDataProvider $dataProvider)
    {
        $result = [];

        /**
         * @var int     $key
         * @var Vehicle $model
         */
        foreach ($dataProvider->getModels() as $key => $model) {
            $result[ $key ] = [
                'id'         => $model->id,
                'brand_name' => $model->brand->name,
                'model_name' => $model->model_name,
            ];
        }

        return $result;
    }
}