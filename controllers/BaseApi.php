<?php

namespace app\controllers;

use app\models\User;
use Yii;
use yii\rest\Controller;
//use yii\web\Controller;
use yii\web\Response;


class BaseApi extends Controller
{
    public $enableCsrfValidation = false;

    public function init()
    {
        parent::init();
//        Yii::$app->response->format = Response::FORMAT_JSON;

        \Yii::$app->user->enableSession = false;
//        Yii::$app->response->getHeaders()->set('Access-Control-Allow-Origin', '*');
//        Yii::$app->response->getHeaders()->set('Access-Control-Allow-Credentials', 'true');
//        Yii::$app->response->getHeaders()->set('Sec-Fetch-Mode', 'no-cors');
//        Yii::$app->response->getHeaders()->set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
//        Yii::$app->response->getHeaders()->set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//        Yii::$app->response->getHeaders()->set("Pragma", "no-cache");
//        Yii::$app->response->getHeaders()->set("Cache-Control", "no-store, no-cache, must-revalidate");
    }

    public function actions()
    {
        return [
            'options' => [
                'class' => 'yii\rest\OptionsAction',
            ],
        ];
    }

    public function behaviors()
    {
        $behaviors = parent::behaviors();
//        $behaviors['corsFilter' ] = [
//            'class' => \yii\filters\Cors::className(),
//        ];

        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
//            'cors' => [
//                'Origin' => [
//                    'http://192.168.1.17:8080',
//                    'http://localhost:8080',
////                    'https://dev.bilaskra.is'
//                ],
////                'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
//                'Access-Control-Allow-Credentials' => true,
//            ],
        ];


        $behaviors['contentNegotiator'] = [
            'class' => \yii\filters\ContentNegotiator::className(),
            'formats' => [
                'application/json' => \yii\web\Response::FORMAT_JSON,
            ],
        ];

        return $behaviors;
    }

    public function post($key = null)
    {
        $res = json_decode(file_get_contents('php://input'), true);
        if ($key) {
            if (isset($res[$key])) {
                return $res[$key];
            } else {
                return null;
            }
        } else {
            return $res;
        }
    }
}