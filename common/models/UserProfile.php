<?php

namespace common\models;

use yii\db\ActiveRecord;
use yii\db\Exception;

/**
 * This is the model class for table "{{%user_profile}}".
 *
 * @property integer $user_id
 * @property string  $first_name
 * @property string  $family_name
 * @property string  $middle_name
 * @property string  $photo
 * @property string  $telephone_number
 *
 * @property User $user
 */
class UserProfile extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%user_profile}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id', 'first_name', 'telephone_number'], 'required'],
            [['user_id'], 'integer'],
            [['first_name', 'family_name', 'middle_name', 'photo'], 'string', 'max' => 45],
            [['family_name', 'middle_name', 'photo'], 'default', 'value' => ''],
            [['telephone_number'], 'string', 'min' => 12, 'max' => 15],
            [
                ['user_id'],
                'exist',
                'skipOnError' => true,
                'targetClass' => User::className(),
                'targetAttribute' => ['user_id' => 'id']
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'user_id'          => 'User ID',
            'first_name'       => 'First Name',
            'family_name'      => 'Family Name',
            'middle_name'      => 'Middle Name',
            'photo'            => 'Photo',
            'telephone_number' => 'Telephone Number',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUser()
    {
        return $this->hasOne(User::className(), ['id' => 'user_id']);
    }

    public static function create(User $user, $firstName = 'New User', $telephone_number = '+380000000000')
    {
        $newProfile                   = new static();
        $newProfile->user_id          = $user->id;
        $newProfile->first_name       = $firstName;
        $newProfile->telephone_number = $telephone_number;

        if (! $newProfile->validate()) {
            $errors = json_encode($newProfile->getErrors());
            throw new \Exception("Invalid user profile. Errors {$errors}");
        }

        if (! $newProfile->save()) {
            throw new Exception("Can't save profile for user with id - '{$user->id}'.");
        }
    }

    public function afterSave($insert, $changedAttributes)
    {
        parent::afterSave($insert, $changedAttributes);

        if ((true === $insert) || (false === $insert && ! empty($changedAttributes))) {
            ActionLog::write(
                'user_profile',
                $this->user_id,
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
            'user_profile',
            $this->user_id,
            ActionLog::ACTION_TYPE_DELETE,
            $this->getAttributes(),
            ''
        );
    }
}
