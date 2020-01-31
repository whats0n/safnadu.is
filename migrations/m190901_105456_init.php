<?php

use yii\db\Migration;

/**
 * Class m190901_105456_init
 */
class m190901_105456_init extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('events', [
            'id' => $this->primaryKey(),
            '_id' => $this->string(100),
            'city' => $this->string(150),
            'start' => $this->timestamp()->defaultValue('0000-00-00 00:00:00'),
            'end' => $this->timestamp()->defaultValue('0000-00-00 00:00:00'),
            'event_id' => $this->string(100),
            'occurrence' => $this->string(100),
            'owner' => $this->string(100),
            'postal' => $this->integer(),
            'street' => $this->string(100),
            'lat' => $this->double(),
            'lon' => $this->double(),
            'modified' => $this->integer(),
            'image_id'=>$this->string(100),
            'image_path'=>$this->string(100),
            'title_is'=>$this->string(300),
            'title_en'=>$this->string(300),
            'text_is'=>$this->text(),
            'text_en'=>$this->text(),
            'deleted' => $this->integer(1)->defaultValue(0),
            'created' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP')
        ]);

        $this->createTable('events_match', [
            '_id' => $this->string(100)
        ]);

//        $this->createTable('images', [
//            'id' => $this->primaryKey(),
//            'event_id' => $this->integer(),
//            'image_id' => $this->string(100),
//            'large' => $this->string(100),
//            'medium' => $this->string(100),
//            'path' => $this->string(100),
//            'small' => $this->string(100),
//            'time' => $this->integer(),
//            'created' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP')
//        ]);

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m190901_105456_init cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m190901_105456_init cannot be reverted.\n";

        return false;
    }
    */
}
