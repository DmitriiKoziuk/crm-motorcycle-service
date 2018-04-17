<?php
namespace backend\modules\v1\components;

use Yii;
use yii\db\Expression;
use backend\modules\v1\models\VehicleType;

class VehicleTypeAction
{
    public static function create(string $name)
    {
        $transaction       = Yii::$app->db->beginTransaction();
        $vehicleType       = new VehicleType();
        $vehicleType->name = $name;

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

    public static function findOrCreate($id = null, $name = null)
    {
        try {
            $vehicleType = null;

            if (! empty($id)) {
                $vehicleType = VehicleType::find()
                    ->where(['id' => new Expression(':id')], [':id' => $id])
                    ->one();
            }

            if (empty($id) && ! empty($name)) {
                $vehicleType = VehicleType::find()
                    ->where(['name' => new Expression(':name')], [':name' => $name])
                    ->one();

                if (empty($vehicleType)) {
                    $vehicleType = static::create($name);
                }
            }

            if (empty($vehicleType)) {
                throw new \Exception('Can`t find or create vehicle type');
            }

            return $vehicleType;
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
        }
    }
}