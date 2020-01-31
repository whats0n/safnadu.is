<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "safnanott_answer".
 *
 * @property int $id
 * @property int $question_id
 * @property int $user_id
 * @property string|null $answer
 * @property string $created
 */
class SafnanottAnswer extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'safnanott_answer';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['question_id', 'user_id'], 'required'],
            [['question_id', 'user_id'], 'integer'],
            [['created'], 'safe'],
            [['answer'], 'string', 'max' => 100],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'question_id' => 'Question ID',
            'user_id' => 'User ID',
            'answer' => 'Answer',
            'created' => 'Created',
        ];
    }
}
