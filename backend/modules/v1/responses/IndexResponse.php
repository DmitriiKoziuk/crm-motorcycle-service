<?php
namespace backend\modules\v1\responses;

use yii\data\ActiveDataProvider;
use backend\modules\v1\interfaces\IndexResponseInterface;

class IndexResponse implements IndexResponseInterface
{
    public static function generate(ActiveDataProvider $dataProvider) {
        return [
            'count'      => $dataProvider->getTotalCount(),
            'page_size'  => $dataProvider->pagination->pageSize,
            'page_index' => $dataProvider->pagination->page,
            'results'    => static::getResult($dataProvider),
        ];
    }

    protected static function getResult(ActiveDataProvider $dataProvider)
    {
        $result = [];

        /**
         * @var int                  $key
         * @var \yii\db\ActiveRecord $model
         */
        foreach ($dataProvider->getModels() as $key => $model) {
            $result[ $key ] = $model->getAttributes();
        }

        return $result;
    }
}