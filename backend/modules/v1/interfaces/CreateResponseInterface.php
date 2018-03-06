<?php
namespace backend\modules\v1\interfaces;

use yii\db\ActiveRecord;

interface CreateResponseInterface
{
    public static function generate(
        ActiveRecord $activeRecord,
        $includeAttribute = null,
        $executeAttribute = []
    );
}