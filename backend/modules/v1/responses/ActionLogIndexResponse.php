<?php
namespace backend\modules\v1\responses;

use yii\data\ActiveDataProvider;
use backend\modules\v1\models\ActionLog;

class ActionLogIndexResponse extends IndexResponse
{
    protected static function getResult(ActiveDataProvider $dataProvider)
    {
        $result = [];

        /**
         * @var int       $key
         * @var ActionLog $model
         */
        foreach ($dataProvider->getModels() as $key => $model) {
            $result[ $key ] = [
                'id'          => $model->id,
                'entity_name' => $model->entity_name,
                'entity_id'   => $model->entity_id,
                'action_type' => $model->action_type,
                'old_data'    => (empty($model->old_data) ? '' : unserialize($model->old_data)),
                'new_data'    => (empty($model->new_data) ? '' : unserialize($model->new_data)),
                'apply_time'  => $model->apply_time,
            ];
        }

        return $result;
    }
}