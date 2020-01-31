<?php

namespace app\controllers\api;

use app\models\Safnanott;
use app\models\SafnanottAnswer;
use app\models\SafnanottUser;
use Yii;
use app\controllers\BaseApi;


class SafnanottController extends BaseApi
{
    public function actionIndex()
    {
        return Safnanott::find()->all();
    }

    public function actionUser()
    {
        $u = new SafnanottUser();
        $u->setAttributes($this->post());
        $u->save();
        return ['access-token' => $u->key];
    }

    public function actionSave()
    {

        $token = $this->post('token');
        $user = SafnanottUser::find()->where(['key' => $token])->one();
        if ($user) {
            $game = Safnanott::find()->where(['key' => $this->post('key')])->one();
            $answer = new SafnanottAnswer();
            $answer->user_id = $user->id;
            $answer->question_id = $this->post('answer')?$this->post('id'):$game->id;
            $answer->answer = $this->post('answer');
            $answer->save();

            return ['status' => true];

        } else {
            return ['err' => 'User not found'];
        }
    }

    public function actionAnswers()
    {
        $token = $this->post('token');
        $user = SafnanottUser::find()->where(['key' => $token])->one();

        return SafnanottAnswer::find()->where(['user_id' => $user->id])->all();
    }
}
