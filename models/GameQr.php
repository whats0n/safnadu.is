<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "game_qr".
 *
 * @property int $id
 * @property int $user_id
 * @property int $query_id
 * @property string $qr
 * @property int $status
 * @property string $created
 */
class GameQr extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'game_qr';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['user_id', 'query_id', 'status'], 'integer'],
            [['created'], 'safe'],
            [['qr'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'User ID',
            'query_id' => 'Query ID',
            'qr' => 'Qr',
            'status' => 'Status',
            'created' => 'Created',
        ];
    }
}
