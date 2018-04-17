<?php

use yii\db\Migration;

/**
 * Handles the creation of table `vehicle`.
 */
class m180301_092200_create_vehicle_table extends Migration
{
    protected $tableName = '{{%vehicle}}';

    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $this->createTable($this->tableName, [
            'id'               => $this->primaryKey(),
            'vehicle_brand_id' => $this->integer()->notNull(),
            'vehicle_type_id'  => $this->integer()->notNull(),
            'model_name'       => $this->string(150)->notNull()->unique(),
        ]);

        $this->createIndex(
            'idx-vehicle_brand-id',
            $this->tableName,
            'vehicle_brand_id'
        );
        $this->createIndex(
            'idx-vehicle-vehicle_type_id',
            $this->tableName,
            'vehicle_type_id'
        );


        $this->addForeignKey(
            'fk-vehicle_brand-id',
            $this->tableName,
            'vehicle_brand_id',
            '{{%vehicle_brand}}',
            'id',
            'CASCADE',
            'CASCADE'
        );
        $this->addForeignKey(
            'fk-vehicle-vehicle_type_id',
            $this->tableName,
            'vehicle_type_id',
            '{{%vehicle_type}}',
            'id',
            'CASCADE',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function down()
    {
        $this->dropForeignKey('fk-vehicle_brand-id', $this->tableName);
        $this->dropForeignKey('fk-vehicle-vehicle_type_id', $this->tableName);
        $this->dropTable($this->tableName);
    }
}
