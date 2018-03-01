<?php

use yii\db\Migration;

/**
 * Handles the creation of table `client_vehicle`.
 */
class m180301_092717_create_client_vehicle_table extends Migration
{
    protected $tableName = '{{%client_vehicle}}';

    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $this->createTable($this->tableName, [
            'id'         => $this->primaryKey(),
            'client_id'  => $this->integer()->notNull(),
            'vehicle_id' => $this->integer()->notNull(),
            'vin'        => $this->string(17)->notNull(),
            'note'       => $this->string(150)->notNull()->defaultValue(''),
        ]);

        $this->createIndex(
            'idx-client_vehicle-client_id',
            $this->tableName,
            'client_id'
        );
        $this->createIndex(
            'idx-client_vehicle-vehicle_id',
            $this->tableName,
            'vehicle_id'
        );
        $this->createIndex(
            'idx-client_vehicle-vin',
            $this->tableName,
            'vin'
        );

        $this->addForeignKey(
            'fk-client_vehicle-client_id',
            $this->tableName,
            'client_id',
            '{{%client}}',
            'id',
            'CASCADE',
            'CASCADE'
        );
        $this->addForeignKey(
            'fk-client_vehicle-vehicle_id',
            $this->tableName,
            'vehicle_id',
            '{{%vehicle}}',
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
        $this->dropForeignKey('fk-client_vehicle-vehicle_id', $this->tableName);
        $this->dropForeignKey('fk-client_vehicle-client_id', $this->tableName);
        $this->dropTable($this->tableName);
    }
}
