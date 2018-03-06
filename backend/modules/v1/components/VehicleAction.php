<?php
namespace backend\modules\v1\components;

use Yii;
use backend\modules\v1\models\Vehicle;
use backend\modules\v1\models\VehicleType;
use backend\modules\v1\models\VehicleBrand;

class VehicleAction
{
    public static function create(
        string       $model_name,
        VehicleType  $vehicleType,
        VehicleBrand $vehicleBrand
    ) {
        $transaction  = Yii::$app->db->beginTransaction();

        try {
            $vehicle                   = new Vehicle();
            $vehicle->vehicle_type_id  = $vehicleType->id;
            $vehicle->vehicle_brand_id = $vehicleBrand->id;
            $vehicle->model_name       = $model_name;

            if (! $vehicle->validate()) {
                throw new \Exception('Vehicle validation not pass');
            }

            if (! $vehicle->save()) {
                throw new \Exception('Can`t create vehicle');
            }

            $transaction->commit();
            return $vehicle;
        } catch (\Exception $e) {
            $transaction->rollBack();
            return ['error' => $e->getMessage()];
        }
    }
}