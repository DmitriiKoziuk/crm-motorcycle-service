<?php

use yii\db\Migration;

/**
 * Handles the creation of table `action_log`.
 */
class m180301_131955_create_action_log_table extends Migration
{
    protected $tableName = '{{%action_log}}';
    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable($this->tableName, [
            'id'          => $this->primaryKey(),
            'user_id'     => $this->integer()->notNull(),
            'entity_name' => $this->string(45)->notNull(),
            'entity_id'   => $this->string(45)->notNull()->defaultValue(''),
            'action_type' => $this->string(15)->notNull(),
            'old_data'    => $this->text()->notNull()->defaultValue(''),
            'new_data'    => $this->text()->notNull()->defaultValue(''),
            'apply_time'  => $this->integer()->notNull(),
        ], $tableOptions);

        $this->createIndex(
            'idx-action_log-user_id',
            $this->tableName,
            'user_id'
        );

        $this->addForeignKey(
            'fk-action_log-user_id',
            $this->tableName,
            'user_id',
            '{{%user}}',
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
        $this->dropForeignKey('fk-action_log-user_id', $this->tableName);
        $this->dropTable($this->tableName);
    }
}
