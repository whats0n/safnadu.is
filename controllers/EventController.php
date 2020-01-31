<?php

namespace app\controllers;

use app\models\Events;
use app\models\Tags;
use Yii;
use yii\filters\AccessControl;
use yii\helpers\Url;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;

class EventController extends Controller
{

    public function actionIndex($id)
    {
        $this->layout = 'event';
        $event = Events::find()->where(['_id' => $id])->one();
        $tags = Tags::find()->where(['event_id' => $id, 'ln' => 'is'])->all();

        Yii::$app->controller->view->registerMetaTag(
            [
                'property' => 'og:title',
                'content' => $event->title_is
            ], 'og:title');

        Yii::$app->controller->view->registerMetaTag(
            [
                'property' => 'og:description',
                'content' => $event->text_is
            ], 'og:description');

        Yii::$app->controller->view->registerMetaTag(
            [
                'property' => 'og:image',
                'content' => 'https://hvirfill.reykjavik.is/images/'.$event->image_id.'_large.jpg'
            ], 'og:og:image');


        list($width, $height, $type, $attr) = getimagesize('https://hvirfill.reykjavik.is/images/'.$event->image_id.'_large.jpg');
        Yii::$app->controller->view->registerMetaTag(
            [
                'property' => 'og:image:width',
                'content' => $width
            ], 'og:image:width');

        Yii::$app->controller->view->registerMetaTag(
            [
                'property' => 'og:image:height',
                'content' => $height
            ], 'og:image:height');

        return $this->render('index', ['event' => $event, 'tags' => $tags]);
    }
}