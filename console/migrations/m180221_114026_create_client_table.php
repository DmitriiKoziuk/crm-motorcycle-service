<?php

use yii\db\Migration;

/**
 * Handles the creation of table `client`.
 */
class m180221_114026_create_client_table extends Migration
{
    protected $tableName = '{{%client}}';

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
            'id'          => $this->primaryKey(),
            'first_name'  => $this->string(45)->notNull()->defaultValue(''),
            'family_name' => $this->string(45)->notNull()->defaultValue(''),
            'middle_name' => $this->string(45)->notNull()->defaultValue(''),
        ], $tableOptions);

        $this->createIndex(
            'idx-client-all_fields',
            $this->tableName,
            [
                'first_name',
                'family_name',
                'middle_name',
            ]
        );
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable($this->tableName);
    }
}
