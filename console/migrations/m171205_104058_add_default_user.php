<?php

use yii\db\Migration;
use backend\models\User;

/**
 * Class m171205_104058_add_default_user
 */
class m171205_104058_add_default_user extends Migration
{
    private $username = 'admin';
    private $email    = 'someAdminEmail';
    private $password;

    public function init()
    {
        parent::init();

        $this->password = Yii::$app->security->generateRandomString(10);
    }

    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        User::create(
            $this->username,
            $this->email,
            $this->password
        );

        echo "Login - '{$this->username}', Password - '{$this->password}'" . PHP_EOL;
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        Yii::$app->db->createCommand()
            ->delete(
                '{{%user}}',
                [
                    'username' => $this->username
                ]
            )->execute();
    }
}
