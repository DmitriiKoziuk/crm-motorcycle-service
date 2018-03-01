<?php

namespace common\models;

use yii\db\ActiveRecord;

/**
 * This is the model class for table "{{%client_telephone}}".
 *
 * @property int    $client_id
 * @property string $number
 * @property string $note
 *
 * @property Client $client
 */
class ClientTelephone extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%client_telephone}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['client_id', 'number'], 'required'],
            [['client_id'], 'integer'],
            [['number'], 'string', 'min' => 13, 'max' => 13],
            [['note'], 'string', 'max' => 150],
            [['note'], 'default', 'value' => ''],
            [['client_id', 'number'], 'unique', 'targetAttribute' => ['client_id', 'number']],
            [['number'], 'unique'],
            [
                ['client_id'],
                'exist',
                'skipOnError' => true,
                'targetClass' => Client::class,
                'targetAttribute' => ['client_id' => 'id']
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'client_id' => 'Client ID',
            'number'    => 'Number',
            'note'      => 'Note',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getClient()
    {
        return $this->hasOne(Client::class, ['id' => 'client_id']);
    }
}
