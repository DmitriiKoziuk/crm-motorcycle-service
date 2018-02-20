<?php
namespace backend\modules\v1\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;

class UserSearch extends User
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['username', 'role'], 'string'],
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

        return $dataProvider;
    }
}