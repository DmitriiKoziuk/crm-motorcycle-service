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

    public function afterSave($insert, $changedAttributes)
    {
        parent::afterSave($insert, $changedAttributes);

        if ((true === $insert) || (false === $insert && ! empty($changedAttributes))) {
            ActionLog::write(
                'vehicle_brand',
                $this->id,
                (true === $insert ? ActionLog::ACTION_TYPE_CREATE : ActionLog::ACTION_TYPE_UPDATE),
                (true === $insert ? '' : serialize($changedAttributes)),
                $this->getAttributes(array_keys($changedAttributes))
            );
        }
    }

    public function afterDelete()
    {
        parent::afterDelete();

        ActionLog::write(
            'vehicle_brand',
            $this->id,
            ActionLog::ACTION_TYPE_DELETE,
            $this->getAttributes(),
            ''
        );
    }
}
