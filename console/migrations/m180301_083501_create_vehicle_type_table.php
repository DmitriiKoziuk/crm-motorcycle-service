<?php

use yii\db\Migration;

/**
 * Handles the creation of table `vehicle_type`.
 */
class m180301_083501_create_vehicle_type_table extends Migration
{
    protected $tableName = '{{%vehicle_type}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable($this->tableName, [
            'id'   => $this->primaryKey(),
            'name' => $this->string(15)->notNull(),
        ]);

        $this->createIndex(
            'idx-vehicle_type-name',
            $this->tableName,
            'name'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable($this->tableName);
    }
}
