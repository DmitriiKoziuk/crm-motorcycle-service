<?php
namespace backend\modules\v1\components;

use Yii;
use backend\modules\v1\models\VehicleType;

class VehicleTypeAction
{
    public static function create(array $params)
    {
        $transaction = Yii::$app->db->beginTransaction();
        $vehicleType = new VehicleType();
        $vehicleType->setAttributes($params);

        try {
            if (! $vehicleType->validate()) {
                throw new \Exception('Vehicle type attribute validation error');
            }

            if (! $vehicleType->save()) {
                throw new \Exception('Can\'t save vehicle type');
            }

            $transaction->commit();
        } catch (\Exception $e) {
            $transaction->rollBack();
        }

        return $vehicleType;
    }

    public static function update($id, array $params)
    {
        $transaction = Yii::$app->db->beginTransaction();
        $vehicleType = VehicleType::find()->where(['id' => $id])->one();

        try {
            if (empty($vehicleType)) {
                throw new \Exception("Can't find vehicle type with id - {$id}");
            }

            $vehicleType->setAttributes($params);

            if (! $vehicleType->validate()) {
                throw new \Exception('Vehicle type attribute validation error');
            }

            if (! $vehicleType->save()) {
                throw new \Exception('Can\'t save vehicle type');
            }

            $transaction->commit();
        } catch (\Exception $e) {
            $transaction->rollBack();
        }

        return $vehicleType;
    }
}