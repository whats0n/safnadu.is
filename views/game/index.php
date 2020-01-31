<?php

use yii\helpers\Html;
use yii\grid\GridView;
use Da\QrCode\QrCode;

/* @var $this yii\web\View */
/* @var $searchModel app\models\GameSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Games';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="game-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Game', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
//            ['class' => 'yii\grid\SerialColumn'],
            'id',
            'name_is',
            'name_en',
//            'key',
            'question_is:ntext',
            'question_en:ntext',
            [
                'header' => 'QR',
                'format' => 'raw',
                'value' => function ($d) {

//                    $url = \yii\helpers\Url::to("/game/i?key=" . $d->key,true);
//                    $url = 'https://jolavaettir.safnadu.is/creature?id=' . $d->id . '&&key=' . $d->key;
//                    $qrCode = (new QrCode($url))
//                        ->setSize(1024)
//                        ->setMargin(5);
////                        ->useForegroundColor(51, 153, 255);
//
//                    return '<img width="25" src="' . $qrCode->writeDataUri() . '">';
                }
            ],
            //'img',
            //'lat',
            //'lon',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
