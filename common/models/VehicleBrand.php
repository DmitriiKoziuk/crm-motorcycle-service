<?php

namespace common\models;

use yii\db\ActiveRecord;

/**
 * This is the model class for table "{{%vehicle_brand}}".
 *
 * @property int    $id
 * @property string $name
 *
 * @property Vehicle[] $vehicles
 */
class VehicleBrand extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%vehicle_brand}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['name'], 'string', 'max' => 45],
            [['name'], 'unique'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id'   => 'ID',
            'name' => 'Name',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getVehicles()
    {
        return $this->hasMany(Vehicle::class, ['vehicle_brand_id' => 'id']);
    }
}
