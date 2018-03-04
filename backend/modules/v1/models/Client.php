<?php
namespace backend\modules\v1\models;

use common\models\Client as C;

/**
 * Class Client
 * @package backend\modules\v1\models
 *
 * @property ClientTelephone[] $telephones
 * @property ClientVehicle[]   $vehicles
 */
class Client extends C
{
    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTelephones()
    {
        return $this->hasMany(ClientTelephone::class, ['client_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getVehicles()
    {
        return $this->hasMany(ClientVehicle::class, ['client_id' => 'id']);
    }
}