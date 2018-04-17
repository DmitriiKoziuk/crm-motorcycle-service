<?php
namespace backend\modules\v1\responses;

use yii\db\ActiveRecord;
use backend\modules\v1\interfaces\ViewResponseInterface;

class ViewResponse implements ViewResponseInterface
{
    public static function generate(
        ActiveRecord $activeRecord,
        $includeAttributes = null,
        $exceptAttributes = []
    ) {
        return $activeRecord->getAttributes($includeAttributes, $exceptAttributes);
    }
}