<?php
namespace backend\modules\v1\models;

use common\models\ClientVehicle as CV;

/**
 * Class ClientVehicle
 * @package backend\modules\v1\models
 *
 * @property Client  $client
 * @property Vehicle $vehicle
 */
class ClientVehicle extends CV
{
    /**
     * @return \yii\db\ActiveQuery
     */
    public function getClient()
    {
        return $this->hasOne(Client::class, ['id' => 'client_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getVehicle()
    {
        return $this->hasOne(Vehicle::class, ['id' => 'vehicle_id']);
    }

    public function getId()
    {
        return $this->id;
    }

    public function getType()
    {
        return $this->vehicle->type->name;
    }

    public function getBrandName()
    {
        return $this->vehicle->brand->name;
    }

    public function getModelName()
    {
        return $this->vehicle->model_name;
    }

    public function getVin()
    {
        return $this->vin;
    }

    public function getNote()
    {
        return $this->note;
    }
}
