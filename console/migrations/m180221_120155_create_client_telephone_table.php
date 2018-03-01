<?php

use yii\db\Migration;

/**
 * Handles the creation of table `client_telephone`.
 */
class m180221_120155_create_client_telephone_table extends Migration
{
    protected $tableName = '{{%client_telephone}}';

    /**
     * @inheritdoc
     */
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable($this->tableName, [
            'client_id' => $this->integer()->notNull(),
            'number'    => $this->string(13)->notNull()->unique(),
            'note'      => $this->string(150)->notNull()->defaultValue(''),
        ], $tableOptions);

        $this->addPrimaryKey(
            'client_telephone-pk',
            $this->tableName,
            [
                'client_id',
                'number',
            ]
        );

        $this->createIndex(
            'idx-client_telephone-client_id',
            $this->tableName,
            'client_id'
        );
        $this->createIndex(
            'idx-client_telephone-number',
            $this->tableName,
            'number'
        );
        $this->createIndex(
            'idx-client_telephone-number-unique',
            $this->tableName,
            'number',
            true
        );

        $this->addForeignKey(
            'fk-client_telephone-client_id',
            $this->tableName,
            'client_id',
            '{{%client}}',
            'id',
            'CASCADE',
            'CASCADE'
        );
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropForeignKey('fk-client_telephone-client_id', $this->tableName);
        $this->dropTable($this->tableName);
    }
}
