<?php

namespace app\controllers;

use app\models\Events;
use app\models\Tags;
use Yii;
use yii\db\Expression;
use yii\filters\AccessControl;
use app\controllers\BaseApi;
use yii\helpers\ArrayHelper;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;

class ApiController extends BaseApi
{

    public function actionIndex($id = null)
    {

        ini_set('memory_limit', '-1');
        if ($id) {
            $event = Events::find()->where(['_id' => $id])->one();
            $res = json_decode($event->raw, true);
            if ($next = Events::find()->where(['>', 'id', $event->id])->andWhere(['deleted' => 0])->one()) {
                $res['next'] = $next->_id;
            } else {
                $res['next'] = Events::find()->andWhere(['deleted' => 0])->one()->_id;
            }

            if ($prev = Events::find()->where(['<', 'id', $event->id])->andWhere(['deleted' => 0])->orderBy(['id' => SORT_DESC])->one()) {
                $res['prev'] = $prev->_id;
            } else {
                $res['prev'] = Events::find()->orderBy(['id' => SORT_DESC])->andWhere(['deleted' => 0])->one()->_id;
            }

            $res['min'] = $event->min;
            $res['max'] = $event->max;

            //$res['id']= $event->id;
            return $res;
        }

        $q = Events::find()
            ->limit(30);

        $q->orderBy("start");

        if ($this->post('offset')) {
            $q->offset($this->post('offset'));
        }

        if ($this->post('limit')) {
            $q->limit($this->post('limit'));
        }


        $this->filter($q);
        $is_search = false;

        $count = Events::find();

        if ($this->post("place") || $this->post("tag") || $this->post("search")) {
            $is_search = true;
            $q->groupBy('title_is,place_is,min');
            $count->groupBy('title_is,place_is,min');
        }
//return $q->createCommand()->rawSql;
        $events = $q->all();
        $res = [];

        foreach ($events as $e) {
            $r = json_decode($e->raw, true);
            $r['min'] = $e->min;
            $r['max'] = $e->max;
            $res[] = $r;
        }


        $this->filter($count);
        return ['total' => $count->count(), 'items' => $res, 'is_search' => $is_search];
    }

    private function filter(&$q)
    {
        if ($this->post("range")) {
            $dates = explode(",", $this->post("range"));
            $q->andWhere([">", 'start', $dates[0]]);
            $q->andWhere(["<", 'end', $dates[1]]);
        }

        if ($this->post("place")) {
//            $q->andWhere(['or',
//                ['RLIKE', 'place_is', "[[:<:]]" . $this->post('place') . "[[:>:]]"],
//                ['place_is' => $this->post('place')]
//            ]);
            $q->andWhere(['or',
                ['LIKE', 'place_is', new Expression("'% " .$this->post('place') . "%'")],
                ['place_is' => $this->post('place')]
            ]);
        }

        if ($this->post("tag")) {
            $tags = Tags::find()->where(['like', 'name', $this->post('tag')])->all();
            $q->andWhere(['in', 'id', ArrayHelper::getColumn($tags, 'event_id')]);
        }

        if ($this->post("search")) {
            $q->andWhere(['or',
                ['like', 'title_is', $this->post("search")],
                ['like', 'text_is', $this->post("search")]
            ]);
        }

        if ($this->post('access') || $this->post('access') === false) {
            if ($this->post('access') == true) {
                $tags = Tags::find()->where(['like', 'name', 'keyptur'])->all();
            } else {
                $tags = Tags::find()->where(['like', 'name', 'ókeypis'])->all();
            }
            $q->andWhere(['in', 'id', ArrayHelper::getColumn($tags, 'event_id')]);
        }
    }

}
