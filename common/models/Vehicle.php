<?php

namespace common\models;

use yii\db\ActiveRecord;

/**
 * This is the model class for table "{{%vehicle}}".
 *
 * @property int    $id
 * @property int    $vehicle_brand_id
 * @property string $model_name
 *
 * @property ClientVehicle[] $clientVehicles
 * @property VehicleBrand    $vehicleBrand
 */
class Vehicle extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%vehicle}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['vehicle_brand_id', 'model_name'], 'required'],
            [['vehicle_brand_id'], 'integer'],
            [['model_name'], 'string', 'max' => 150],
            [['model_name'], 'unique'],
            [
                ['vehicle_brand_id'],
                'exist',
                'skipOnError' => true,
                'targetClass' => VehicleBrand::class,
                'targetAttribute' => ['vehicle_brand_id' => 'id']
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id'               => 'ID',
            'vehicle_brand_id' => 'Vehicle Brand ID',
            'model_name'       => 'Model Name',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getClientVehicles()
    {
        return $this->hasMany(ClientVehicle::class, ['vehicle_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getVehicleBrand()
    {
        return $this->hasOne(VehicleBrand::class, ['id' => 'vehicle_brand_id']);
    }
}
