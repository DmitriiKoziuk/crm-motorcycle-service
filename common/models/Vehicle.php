<?php

namespace common\models;

use yii\db\ActiveRecord;

/**
 * This is the model class for table "{{%vehicle}}".
 *
 * @property int    $id
 * @property int    $vehicle_type_id
 * @property int    $vehicle_brand_id
 * @property string $model_name
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
            [['vehicle_brand_id', 'vehicle_type_id', 'model_name'], 'required'],
            [['vehicle_brand_id', 'vehicle_type_id'], 'integer'],
            [['model_name'], 'string', 'max' => 150],
            [['model_name'], 'unique'],
            [
                ['vehicle_brand_id'],
                'exist',
                'skipOnError' => true,
                'targetClass' => VehicleBrand::class,
                'targetAttribute' => ['vehicle_brand_id' => 'id']
            ],
            [
                ['vehicle_type_id'],
                'exist',
                'skipOnError' => true,
                'targetClass' => VehicleType::class,
                'targetAttribute' => ['vehicle_type_id' => 'id']
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
            'vehicle_type_id'  => 'Vehicle Type ID',
            'model_name'       => 'Model Name',
        ];
    }

    public function afterSave($insert, $changedAttributes)
    {
        parent::afterSave($insert, $changedAttributes);

        if ((true === $insert) || (false === $insert && ! empty($changedAttributes))) {
            ActionLog::write(
                'vehicle',
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
            'vehicle',
            $this->id,
            ActionLog::ACTION_TYPE_DELETE,
            $this->getAttributes(),
            ''
        );
    }
}
