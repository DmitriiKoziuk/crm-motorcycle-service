<?php

namespace common\models;

use yii\db\ActiveRecord;

/**
 * This is the model class for table "{{%client_vehicle}}".
 *
 * @property int    $id
 * @property int    $client_id
 * @property int    $vehicle_id
 * @property string $vin
 * @property string $note
 *
 * @property Client  $client
 * @property Vehicle $vehicle
 */
class ClientVehicle extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%client_vehicle}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['client_id', 'vehicle_id', 'vin'], 'required'],
            [['client_id', 'vehicle_id'], 'integer'],
            [['vin'], 'string', 'max' => 17],
            [['note'], 'string', 'max' => 150],
            [['note'], 'default', 'value' => ''],
            [
                ['client_id'],
                'exist',
                'skipOnError' => true,
                'targetClass' => Client::class,
                'targetAttribute' => ['client_id' => 'id']
            ],
            [
                ['vehicle_id'],
                'exist',
                'skipOnError' => true,
                'targetClass' => Vehicle::class,
                'targetAttribute' => ['vehicle_id' => 'id']
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id'         => 'ID',
            'client_id'  => 'Client ID',
            'vehicle_id' => 'Vehicle ID',
            'vin'        => 'Vin',
            'note'       => 'Note',
        ];
    }

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
}
