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
}
