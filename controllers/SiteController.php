<?php

namespace app\controllers;

use app\models\Events;
use app\models\Tags;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;

class SiteController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
        $events = Events::find()->where(['deleted' => 0])->limit(25)->all();
        return $this->render('index', ['events' => $events]);
    }

    public function actionView($id)
    {
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
                'property' => 'og:og:image',
                'content' => 'https://hvirfill.reykjavik.is/images/'.$event->image_id.'_large.jpg'
            ], 'og:og:image');

        return $this->render('view', ['event' => $event, 'tags' => $tags]);
    }
}
