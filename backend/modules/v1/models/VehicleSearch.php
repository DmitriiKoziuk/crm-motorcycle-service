<?php
namespace backend\modules\v1\models;

use yii\base\Model;
use yii\db\Expression;
use yii\data\ActiveDataProvider;

class VehicleSearch extends Vehicle
{
    public $page_size  = 2;
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

        $query = Vehicle::find()->with([
            'brand'
        ]);

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
            'pagination' => [
                'pageSize' => $this->page_size,
                'page'     => $this->page_index,
            ]
        ]);

        if (!$this->validate()) {
            throw new \Exception('Validation not pass.');
        }

        $query->FilterWhere([
            Vehicle::tableName().'.id' => $this->id,
        ]);

        return $dataProvider;
    }
}