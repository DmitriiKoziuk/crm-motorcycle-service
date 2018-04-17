<?php
namespace backend\modules\v1\responses;

use backend\modules\v1\models\Client;

class ClientViewResponse
{
    public static function generate(Client $client)
    {
        $attributes               = $client->getAttributes();
        $attributes['telephones'] = [];

        foreach ($client->telephones as $telephone) {
            $attributes['telephones'][] = $telephone->getAttributes(['number', 'note']);
        }

        return $attributes;
    }
}