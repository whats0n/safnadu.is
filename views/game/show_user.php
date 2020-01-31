<?php

use yii\data\ActiveDataProvider;
use yii\grid\GridView;


$dataProvider = new ActiveDataProvider([
    'query' => \app\models\User::find()->orderBy(['id'=>3]),
    'pagination' => [
        'pageSize' => 20,
    ],
]);
echo GridView::widget([
    'dataProvider' => $dataProvider,
]);