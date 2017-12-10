<?php

use yii\db\Migration;

/**
 * Handles the creation of table `user_profile`.
 */
class m171207_124746_create_user_profile_table extends Migration
{
    protected $table = '{{%user_profile}}';

    /**
     * @inheritdoc
     */
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable($this->table, [
            'user_id'          => $this->integer()->notNull(),
            'first_name'       => $this->string(45)->notNull(),
            'family_name'      => $this->string(45),
            'middle_name'      => $this->string(45),
            'photo'            => $this->string(45),
            'telephone_number' => $this->string(15)->notNull(),
        ], $tableOptions);

        $this->addPrimaryKey(
            'user_profile_pk',
            $this->table,
            'user_id'
        );

        $this->createIndex('idx-first_name', $this->table, 'first_name');
        $this->createIndex('idx-family_name', $this->table, 'family_name');
        $this->createIndex('idx-middle_name', $this->table, 'middle_name');
        $this->createIndex('idx-telephone_number', $this->table, 'telephone_number');

        $this->addForeignKey(
            'fk-user_id',
            $this->table,
            'user_id',
            '{{%user}}',
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
        $this->dropForeignKey('fk-user_id', $this->table);

        $this->dropTable($this->table);
    }
}
