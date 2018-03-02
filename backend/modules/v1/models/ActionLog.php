<?php
namespace backend\modules\v1\models;

use common\models\ActionLog as AL;

/**
 * Class ActionLog
 * @package backend\modules\v1\models
 *
 * @property User $user
 */
class ActionLog extends AL
{
    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUser()
    {
       return $this->hasOne(User::class, ['id' => 'user_id']);
    }
}