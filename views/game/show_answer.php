<?php

use yii\data\ActiveDataProvider;
use yii\grid\GridView;

use \app\models\GameAnswer;
use \app\models\Game;


$dataProvider = new ActiveDataProvider([
    'query' => \app\models\GameUser::find()->orderBy(['id' => 3]),
    'pagination' => [
        'pageSize' => 20,
    ],
]);


$question = \yii\helpers\ArrayHelper::getColumn(Game::find()->all(),'name_is');


echo GridView::widget([
    'dataProvider' => $dataProvider,
    'columns' => [
        'id',
        'name',
        'phone',
        [
            'header' => $question[0],
            'value' => function ($d) {
                $answ = GameAnswer::find()->where(['user_id' => $d->id, 'question_id' => 1])->one();
                return $answ?$answ->answer:null;
            }
        ],
        [
            'header' => $question[1],
            'value' => function ($d) {
                $answ = GameAnswer::find()->where(['user_id' => $d->id, 'question_id' => 2])->one();
                return $answ?$answ->answer:null;
            }
        ],
        [
            'header' => $question[2],
            'value' => function ($d) {
                $answ = GameAnswer::find()->where(['user_id' => $d->id, 'question_id' => 3])->one();
                return $answ?$answ->answer:null;
            }
        ],
        [
            'header' => $question[3],
            'value' => function ($d) {
                $answ = GameAnswer::find()->where(['user_id' => $d->id, 'question_id' => 4])->one();
                return $answ?$answ->answer:null;
            }
        ],
        [
            'header' => $question[4],
            'value' => function ($d) {
                $answ = GameAnswer::find()->where(['user_id' => $d->id, 'question_id' => 5])->one();
                return $answ?$answ->answer:null;
            }
        ],
        [
            'header' => $question[5],
            'value' => function ($d) {
                $answ = GameAnswer::find()->where(['user_id' => $d->id, 'question_id' => 6])->one();
                return $answ?$answ->answer:null;
            }
        ],
        [
            'header' => $question[6],
            'value' => function ($d) {
                $answ = GameAnswer::find()->where(['user_id' => $d->id, 'question_id' => 7])->one();
                return $answ?$answ->answer:null;
            }
        ],
        [
            'header' => $question[7],
            'value' => function ($d) {
                $answ = GameAnswer::find()->where(['user_id' => $d->id, 'question_id' => 8])->one();
                return $answ?$answ->answer:null;
            }
        ],
        [
            'header' => $question[8],
            'value' => function ($d) {
                $answ = GameAnswer::find()->where(['user_id' => $d->id, 'question_id' => 9])->one();
                return $answ?$answ->answer:null;
            }
        ],
        [
            'header' => $question[9],
            'value' => function ($d) {
                $answ = GameAnswer::find()->where(['user_id' => $d->id, 'question_id' => 10])->one();
                return $answ?$answ->answer:null;
            }
        ],
        [
            'header' => $question[10],
            'value' => function ($d) {
                $answ = GameAnswer::find()->where(['user_id' => $d->id, 'question_id' => 11])->one();
                return $answ?$answ->answer:null;
            }
        ],
        [
            'header' => $question[11],
            'value' => function ($d) {
                $answ = GameAnswer::find()->where(['user_id' => $d->id, 'question_id' => 12])->one();
                return $answ?$answ->answer:null;
            }
        ],
        [
            'header' => $question[12],
            'value' => function ($d) {
                $answ = GameAnswer::find()->where(['user_id' => $d->id, 'question_id' => 13])->one();
                return $answ?$answ->answer:null;
            }
        ]
    ]
]);