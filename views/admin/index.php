<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\SafnanottSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Safnanotts';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="safnanott-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Safnanott', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
//            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'title',
            [
                'attribute' => 'logo',
                'format' => 'raw',
                'value' => function ($d) {
                    return Html::img($d->logo,['style'=>'max-width:75px;']);
                }

            ],
            [
                'attribute' => 'image',
                'format' => 'raw',
                'value' => function ($d) {
                    return Html::img( $d->image,['style'=>'max-width:75px;']);
                }

            ],
            [
                'attribute' => 'image_big',
                'format' => 'raw',
                'value' => function ($d) {
                    return Html::img( $d->image_big,['style'=>'max-width:75px;']);
                }

            ],
            'description:ntext',
            'lat',
            'lon',
            //'address',
            //'site',
            //'phone',
            //'created',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
