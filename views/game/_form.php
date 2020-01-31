<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Game */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="game-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'name_en')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'name_is')->textInput(['maxlength' => true]) ?>

    <?php $form->field($model, 'key')->textInput(['maxlength' => true]) ?>

    <?php $form->field($model, 'qr')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'question_en')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'question_is')->textarea(['rows' => 6]) ?>
    <?= $form->field($model, 'description_is')->textarea(['rows' => 6]) ?>
    <?= $form->field($model, 'description_en')->textarea(['rows' => 6]) ?>


    <?= $form->field($model, 'lat')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'lon')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'map')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
