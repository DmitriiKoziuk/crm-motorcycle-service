<?php

use yii\db\Migration;

/**
 * Handles the creation of table `vehicle_brand`.
 */
class m180301_082809_create_vehicle_brand_table extends Migration
{
    protected $tableName = '{{%vehicle_brand}}';

    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $this->createTable($this->tableName, [
            'id'   => $this->primaryKey(),
            'name' => $this->string(45)->notNull()->unique(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function down()
    {
        $this->dropTable($this->tableName);
    }
}
