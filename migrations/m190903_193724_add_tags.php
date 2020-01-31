<?php

use yii\db\Migration;

/**
 * Class m190903_193724_add_tags
 */
class m190903_193724_add_tags extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('tags', [
            'id' => $this->primaryKey(),
            'event_id' => $this->integer(),
            'name' => $this->string(150),
            'ln' => $this->string(15)
        ]);

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m190903_193724_add_tags cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m190903_193724_add_tags cannot be reverted.\n";

        return false;
    }
    */
}
