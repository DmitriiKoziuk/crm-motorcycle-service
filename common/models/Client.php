<?php

namespace common\models;

use yii\db\ActiveRecord;

/**
 * This is the model class for table "{{%client}}".
 *
 * @property int    $id
 * @property string $first_name
 * @property string $family_name
 * @property string $middle_name
 *
 * @property ClientTelephone[] $telephones
 */
class Client extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%client}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['first_name'], 'required'],
            [['first_name', 'family_name', 'middle_name'], 'string', 'max' => 45],
            [['first_name', 'family_name', 'middle_name'], 'default', 'value' => ''],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id'          => 'ID',
            'first_name'  => 'First Name',
            'family_name' => 'Family Name',
            'middle_name' => 'Middle Name',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTelephones()
    {
        return $this->hasMany(ClientTelephone::class, ['client_id' => 'id']);
    }

    public function afterSave($insert, $changedAttributes)
    {
        parent::afterSave($insert, $changedAttributes);

        if ((true === $insert) || (false === $insert && ! empty($changedAttributes))) {
            ActionLog::write(
                'client',
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
            'client',
            $this->id,
            ActionLog::ACTION_TYPE_DELETE,
            $this->getAttributes(),
            ''
        );
    }
}
