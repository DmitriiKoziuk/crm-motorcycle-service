<?php

use yii\db\Migration;

/**
 * Handles adding access_token to table `user`.
 */
class m171205_103728_add_access_token_column_to_user_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->addColumn(
            '{{%user}}',
            'access_token',
            $this->string(32)->notNull()->unique()
        );
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropColumn('{{%user}}', 'access_token');
    }
}
