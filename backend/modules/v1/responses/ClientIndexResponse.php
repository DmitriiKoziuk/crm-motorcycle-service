<?php
namespace backend\modules\v1\responses;

use yii\data\ActiveDataProvider;
use backend\modules\v1\models\Client;

class ClientIndexResponse extends IndexResponse
{
    protected static function getResult(ActiveDataProvider $dataProvider)
    {
        $result = [];

        /**
         * @var int    $key
         * @var Client $client
         */
        foreach ($dataProvider->getModels() as $key => $client) {
            $result[ $key ]               = $client->getAttributes();
            $result[ $key ]['telephones'] = [];
            foreach ($client->telephones as $telephone) {
                $result[ $key ]['telephones'][] = $telephone->getAttributes(['number', 'note']);
            }

            foreach ($client->vehicles as $vehicleKey => $vehicle) {
                $result[ $key ]['vehicles'][ $vehicleKey ] = [
                    'id'         => $vehicle->getId(),
                    'brand_name' => $vehicle->getBrandName(),
                    'model_name' => $vehicle->getModelName(),
                    'vin'        => $vehicle->getVin(),
                    'note'       => $vehicle->getNote(),
                ];
            }
        }

        return $result;
    }
}