<?php
namespace backend\modules\v1\models;

use common\models\Vehicle as V;

/**
 * Class Vehicle
 * @package backend\modules\v1\models
 *
 * @property VehicleBrand $brand
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
}
