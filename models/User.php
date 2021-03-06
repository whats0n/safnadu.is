<?php

namespace app\models;

use Yii;
use yii\helpers\ArrayHelper;
use yii\web\IdentityInterface;

/**
 * This is the model class for table "user".
 *
 * @property int $id
 * @property int $role_id
 * @property int $status
 * @property string $email
 * @property string $username
 * @property string $password
 * @property string $auth_key
 * @property string $access_token
 * @property string $logged_in_ip
 * @property string $logged_in_at
 * @property string $created_ip
 * @property string $created_at
 * @property string $updated_at
 * @property string $banned_at
 * @property string $banned_reason
 *
 * @property CompaniesUser[] $companiesUsers
 * @property Profile[] $profiles
 * @property Role $role
 * @property UserAuth[] $userAuths
 * @property UserToken[] $userTokens
 */
class User extends \dektrium\user\models\User implements IdentityInterface
{
//    public static function findIdentity($id)
//    {
//        return static::findOne($id);
//    }
//
    public static function findIdentityByAccessToken($token, $type = null)
    {
        return static::findOne(['access_token' => $token]);
    }
//
//    public function getId()
//    {
//        return $this->id;
//    }
//
//    public function getAuthKey()
//    {
//        return $this->authKey;
//    }
//
//    public function validateAuthKey($authKey)
//    {
//        return $this->authKey === $authKey;
//    }
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'user';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['role_id', 'email'], 'required'],
            [['role_id', 'status'], 'integer'],
            [['logged_in_at', 'created_at', 'updated_at', 'banned_at'], 'safe'],
            [['email', 'username', 'password', 'auth_key', 'access_token', 'logged_in_ip', 'created_ip', 'banned_reason'], 'string', 'max' => 255],
            [['email'], 'unique'],
            [['username'], 'unique'],
            [['role_id'], 'exist', 'skipOnError' => true, 'targetClass' => Role::className(), 'targetAttribute' => ['role_id' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('user', 'ID'),
            'role_id' => Yii::t('user', 'Role ID'),
            'status' => Yii::t('user', 'Status'),
            'email' => Yii::t('user', 'Email'),
            'username' => Yii::t('user', 'Username'),
            'password' => Yii::t('user', 'Password'),
            'auth_key' => Yii::t('user', 'Auth Key'),
            'access_token' => Yii::t('user', 'Access Token'),
            'logged_in_ip' => Yii::t('user', 'Logged In Ip'),
            'logged_in_at' => Yii::t('user', 'Logged In At'),
            'created_ip' => Yii::t('user', 'Created Ip'),
            'created_at' => Yii::t('user', 'Created At'),
            'updated_at' => Yii::t('user', 'Updated At'),
            'banned_at' => Yii::t('user', 'Banned At'),
            'banned_reason' => Yii::t('user', 'Banned Reason'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCompaniesUsers()
    {
        return $this->hasMany(CompaniesUser::className(), ['user_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getProfiles()
    {
        return $this->hasMany(Profile::className(), ['user_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getProfile()
    {
        return $this->hasOne(Profile::className(), ['user_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getRole()
    {
        return $this->hasOne(Role::className(), ['id' => 'role_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUserAuths()
    {
        return $this->hasMany(UserAuth::className(), ['user_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUserTokens()
    {
        return $this->hasMany(UserToken::className(), ['user_id' => 'id']);
    }

    public function beforeValidate()
    {
//        $this->role_id = 2;
        return parent::beforeValidate(); // TODO: Change the autogenerated stub
    }

    public static function canMenu($Arr){
        if(!empty($Arr)){


        }
    }

    public function getUserRole(){
        if($this->id){
            return ArrayHelper::getValue(AuthAssignment::find()->where(['user_id'=>$this->id])->one(),'item_name');
        }
        return null;
    }
}
