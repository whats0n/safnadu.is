<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "tags".
 *
 * @property int $id
 * @property int $event_id
 * @property string $name
 * @property string $ln
 */
class Tags extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'tags';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['event_id'], 'integer'],
            [['name'], 'string', 'max' => 150],
            [['ln'], 'string', 'max' => 15],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'event_id' => 'Event ID',
            'name' => 'Name',
            'ln' => 'Ln',
        ];
    }
}
