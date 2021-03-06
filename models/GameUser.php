<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "game_user".
 *
 * @property int $id
 * @property string $key
 * @property string $phone
 * @property string $name
 * @property string $created
 */
class GameUser extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'game_user';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['created'], 'safe'],
            [['key'], 'string', 'max' => 255],
            [['phone'], 'string', 'max' => 50],
            [['name'], 'string', 'max' => 150],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'key' => 'Key',
            'phone' => 'Phone',
            'name' => 'Name',
            'created' => 'Created',
        ];
    }


    public function beforeSave($insert)
    {
        if(!$this->key){
            $this->key = Yii::$app->security->generateRandomString(64);
        }
        return parent::beforeSave($insert); // TODO: Change the autogenerated stub
    }
}
