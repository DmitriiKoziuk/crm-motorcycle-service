<?php
namespace backend\modules\v1\models;

use yii\base\Model;
use yii\db\Expression;
use yii\data\ActiveDataProvider;

class ClientSearch extends Client
{
    public $page_size  = 2;
    public $page_index = 0;
    public $telephone_number;

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [
                ['id', 'first_name', 'middle_name', 'family_name', 'telephone_number'], 'string'
            ],
            [
                ['page_size', 'page_index'], 'integer'
            ],
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
     * @return ActiveDataProvider
     * @throws \Exception
     */
    public function by(array $params)
    {
        $this->setAttributes($params);

        $query = Client::find()->with([
            'telephones'
        ]);

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
            'sort' => [
                'defaultOrder' => [
                    'id' => SORT_DESC,
                ]
            ],
            'pagination' => [
                'pageSize' => $this->page_size,
                'page'     => $this->page_index,
            ]
        ]);

        if (!$this->validate()) {
            throw new \Exception('Validation not pass.');
        }

        $query->FilterWhere([
            Client::tableName().'.id' => $this->id,
        ]);

        if (! empty($this->first_name)) {
            $query->andWhere([
                'like',
                Client::tableName().'.first_name',
                $this->first_name
            ]);
        }

        if (! empty($this->family_name)) {
            $query->andWhere([
                'like',
                Client::tableName().'.family_name',
                $this->family_name
            ]);
        }

        if (! empty($this->middle_name)) {
            $query->andWhere([
                'like',
                Client::tableName().'.middle_name',
                $this->middle_name
            ]);
        }

        if (! empty($this->telephone_number)) {
            $query->innerJoin(
                ClientTelephone::tableName(),
                [
                    Client::tableName().'.id' => new Expression(ClientTelephone::tableName().'.client_id'),
                ]
            );
            $query->andWhere([
                'like',
                ClientTelephone::tableName().'.number',
                $this->telephone_number
            ]);
            $query->groupBy(Client::tableName().'.id');
        }

        return $dataProvider;
    }
}