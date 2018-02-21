<?php
namespace backend\modules\v1\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use yii\db\Expression;

class UserSearch extends User
{
    public $first_name;
    public $family_name;
    public $telephone_number;

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['username', 'role', 'first_name', 'family_name', 'telephone_number'], 'string'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * @param array $params
     *
     * @return ActiveDataProvider
     *
     * @throws \Exception
     */
    public function search(array $params)
    {
        $this->setAttributes($params);

        $query = User::find()
            ->with(['profile']);

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        if (!$this->validate()) {
            throw new \Exception('Validation not pass.');
        }

        if (! empty($this->username)) {
            $query->andWhere([
                'like', 'username', $this->username
            ]);
        }

        if (
            ! empty($this->first_name) ||
            ! empty($this->family_name) ||
            ! empty($this->telephone_number)
        ) {
            $query->innerJoin(
                UserProfile::tableName(),
                [
                    'user_profile.user_id' => new Expression('user.id'),
                ]
            );

            if (! empty($this->first_name)) {
                $query->andWhere(
                    ['like', 'user_profile.first_name', $this->first_name]
                );
            }

            if (! empty($this->family_name)) {
                $query->andWhere(
                    ['like', 'user_profile.family_name', $this->family_name]
                );
            }

            if (! empty($this->telephone_number)) {
                $query->andWhere(
                    ['like', 'user_profile.telephone_number', $this->telephone_number]
                );
            }
        }

        return $dataProvider;
    }
}