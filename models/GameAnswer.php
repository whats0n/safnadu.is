<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "game_answer".
 *
 * @property int $id
 * @property int $question_id
 * @property int $user_id
 * @property string $answer
 * @property string $created
 */
class GameAnswer extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'game_answer';
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
