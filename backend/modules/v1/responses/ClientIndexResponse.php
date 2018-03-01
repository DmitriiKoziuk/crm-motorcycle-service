<?php
namespace backend\modules\v1\responses;

use yii\data\ActiveDataProvider;
use backend\modules\v1\models\Client;

class ClientIndexResponse
{
    protected static $data = [
        'count'      => null,
        'page_size'  => null,
        'page_index' => null,
        'results'    => null,
    ];

    public static function generate(ActiveDataProvider $dataProvider)
    {
        static::$data['count']      = $dataProvider->getTotalCount();
        static::$data['page_size']  = $dataProvider->pagination->pageSize;
        static::$data['page_index'] = $dataProvider->pagination->page;

        /**
         * @var integer $key
         * @var Client  $client
         */
        foreach ($dataProvider->getModels() as $key => $client) {
            static::$data['results'][ $key ]               = $client->getAttributes();
            static::$data['results'][ $key ]['telephones'] = [];
            foreach ($client->telephones as $telephone) {
                static::$data['results'][ $key ]['telephones'][] = $telephone->getAttributes(['number', 'note']);
            }
        }

        return static::$data;
    }
}