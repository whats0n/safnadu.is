<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "events_match".
 *
 * @property string $_id
 */
class EventsMatch extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'events_match';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['_id'], 'string', 'max' => 100],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            '_id' => 'Id',
        ];
    }
}
