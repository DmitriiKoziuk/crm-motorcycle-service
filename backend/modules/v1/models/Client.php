<?php
namespace backend\modules\v1\models;

use common\models\Client as C;

class Client extends C
{
    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTelephones()
    {
        return $this->hasMany(ClientTelephone::class, ['client_id' => 'id']);
    }
}