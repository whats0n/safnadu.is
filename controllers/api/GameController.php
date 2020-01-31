<?php

namespace app\controllers\api;


use app\models\GameAnswer;
use app\models\GameQr;
use app\models\GameUser as User;
//use mysql_xdevapi\Expression;
use phpDocumentor\Reflection\DocBlock\Tags\Throws;
use Yii;
use app\controllers\BaseApi;
use app\models\Game;
use yii\db\Expression;
use yii\web\UploadedFile;


class GameController extends BaseApi
{

    public function actionIndex()
    {
        $res = [];
        $res['en']['creatures'] = Game::find()->select(['name_en as name', 'question_en as question', 'id', 'photo', 'video', 'icon', 'lat', 'lon', 'description_en as description','map'])->asArray()->all();
        $res['is']['creatures'] = Game::find()->select(['name_is as name', 'question_is as question', 'id', 'photo', 'video', 'icon', 'lat', 'lon', 'description_is as description','map'])->asArray()->all();


        foreach ($res['en']['creatures'] as $k => $item){
            $res['en']['creatures'][$k]['photo'] = \yii\helpers\Url::to("/photos/".$res['en']['creatures'][$k]['photo'],true);
            $res['en']['creatures'][$k]['video'] = \yii\helpers\Url::to("/video/".$res['en']['creatures'][$k]['video'],true);
            $res['en']['creatures'][$k]['icon'] = \yii\helpers\Url::to("/icon/".$res['en']['creatures'][$k]['icon'],true);
        }

        foreach ($res['is']['creatures'] as $k => $item){
            $res['is']['creatures'][$k]['photo'] = \yii\helpers\Url::to("/photos/".$res['is']['creatures'][$k]['photo'],true);
            $res['is']['creatures'][$k]['video'] = \yii\helpers\Url::to("/video/".$res['is']['creatures'][$k]['video'],true);
            $res['is']['creatures'][$k]['icon'] = \yii\helpers\Url::to("/icon/".$res['is']['creatures'][$k]['icon'],true);
        }


        return $res;
    }

    public function actionUser()
    {
        $u = new User();
        $u->setAttributes($this->post());
        $u->save();
        return ['access-token' => $u->key];
    }

    public function actionSave()
    {

        $token = $this->post('token');
        $user = User::find()->where(['key' => $token])->one();
        if ($user) {
            $game = Game::find()->where(['key' => $this->post('key')])->one();
            $answer = new GameAnswer();
            $answer->user_id = $user->id;
            $answer->question_id = $this->post('answer')?$this->post('id'):$game->id;
            $answer->answer = $game?'QR code':$this->post('answer');
            $answer->save();

            return ['status' => true];

        } else {
            return ['err' => 'User not found'];
        }
    }

    public function actionAnswers()
    {
        $token = $this->post('token');
        $user = User::find()->where(['key' => $token])->one();

        return GameAnswer::find()->where(['user_id' => $user->id])->all();
    }

    public function actionSaveQr(){
        $user = User::find()->where(['key'=>Yii::$app->request->post('user')])->one();

        $folder = "qr/".date("Ymd");
        @mkdir($folder,0777,true);

        $qr = new GameQr();

        $info = pathinfo($_FILES['qr']['name']);
        $ext = $info['extension']; // get the extension of the file
        $newname = time().$_FILES['qr']['name'];

        $target = $folder."/".$newname;
        move_uploaded_file( $_FILES['qr']['tmp_name'], $target);


        $qr->qr = $folder."/".$newname;
        $qr->user_id = $user->id;
        $qr->status = Yii::$app->request->post('status');
        $qr->query_id = Yii::$app->request->post('query_id',0);
        return $qr->save();
    }
}
