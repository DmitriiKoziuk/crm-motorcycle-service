<?php
namespace backend\modules\v1\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;

class VehicleBrandSearch extends VehicleBrand
{
    public $page_size  = 20;
    public $page_index = 0;

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [
                ['id'], 'string'
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

    public function by(array $params)
    {
        $this->setAttributes($params);

        $query = VehicleBrand::find();

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
            VehicleBrand::tableName().'.id' => $this->id,
        ]);

        return $dataProvider;
    }
}