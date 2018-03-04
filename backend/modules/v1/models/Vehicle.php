<?php
namespace backend\modules\v1\models;

use common\models\Vehicle as V;

/**
 * Class Vehicle
 * @package backend\modules\v1\models
 *
 * @property VehicleBrand $brand
 * @property VehicleType  $type
 */
class Vehicle extends V
{
    /**
     * @return \yii\db\ActiveQuery
     */
    public function getBrand()
    {
        return $this->hasOne(VehicleBrand::class, ['id' => 'vehicle_brand_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getType()
    {
        return $this->hasOne(VehicleType::class, ['id' => 'vehicle_type_id']);
    }
}
