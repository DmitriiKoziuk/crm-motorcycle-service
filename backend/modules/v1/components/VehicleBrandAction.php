<?php
namespace backend\modules\v1\components;

use Yii;
use backend\modules\v1\models\VehicleBrand;

class VehicleBrandAction
{
    public static function create(array $params)
    {
        $transaction  = Yii::$app->db->beginTransaction();
        $vehicleBrand = new VehicleBrand();
        $vehicleBrand->setAttributes($params);

        try {
            if (! $vehicleBrand->validate()) {
                throw new \Exception('Vehicle brand attribute validation error');
            }

            if (! $vehicleBrand->save()) {
                throw new \Exception('Can\'t save vehicle brand');
            }

            $transaction->commit();
        } catch (\Exception $e) {
            $transaction->rollBack();
        }

        return $vehicleBrand;
    }

    public static function update($id, array $params)
    {
        $transaction  = Yii::$app->db->beginTransaction();
        $vehicleBrand = VehicleBrand::find()->where(['id' => $id])->one();

        try {
            if (empty($vehicleBrand)) {
                throw new \Exception("Can't find vehicle brand with id - {$id}");
            }

            $vehicleBrand->setAttributes($params);

            if (! $vehicleBrand->validate()) {
                throw new \Exception('Vehicle brand attribute validation error');
            }

            if (! $vehicleBrand->save()) {
                throw new \Exception('Can\'t save vehicle brand');
            }

            $transaction->commit();
        } catch (\Exception $e) {
            $transaction->rollBack();
        }

        return $vehicleBrand;
    }
}