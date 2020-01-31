<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\commands;

use app\models\Events;
use app\models\EventsMatch;
use app\models\Images;
use app\models\Tags;
use yii\console\Controller;
use yii\console\ExitCode;
use yii\helpers\ArrayHelper;

/**
 * This command echoes the first argument that you have entered.
 *
 * This command is provided as an example for you to learn how to create console commands.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class ImportController extends Controller
{
    /**
     * This command echoes what you have entered as the message.
     * @param string $message the message to be echoed.
     * @return int Exit code
     */
    public function actionIndex()
    {

        \Yii::$app->db->createCommand()->truncateTable(Events::tableName())->execute();
        \Yii::$app->db->createCommand()->truncateTable(Tags::tableName())->execute();
        $limit = 100;
        $date = date("Y-m-d");
//        $date = '2019-09-01';
        $url = "https://hvirfill.reykjavik.is/find?search=&f={$date}&limit={$limit}&offset=0&sort=start&_=1567161272392";
//        $url = 'https://hvirfill.reykjavik.is/find?search=&all=menningarnott.is&limit=0&offset=0&sort=start&lang=is&skip=5b71b3739c07070561de5281';
//        $co = $this->save($url);
        $i = 0;
        while ($co = $this->save($url)) {
            $i++;
            $offset = $i * $limit;
            $url = "https://hvirfill.reykjavik.is/find?search=&f={$date}&limit={$limit}&offset={$offset}&sort=start&_=1567161272392";
            echo "\n\r";
            echo $co;
            echo "\n\r";
        }

//        $this->del();

        $this->actionSetDates();

        return ExitCode::OK;
    }


//    private function del()
//    {
//        $m = EventsMatch::find()->all();
//
//        $event = Events::find()->select(['id'])->where(['not in', '_id', $m])->all();
//
//        echo count($event);
//
//        Events::updateAll(['deleted' => 1], ['id' => ArrayHelper::getColumn($event, 'id')]);
//
//        EventsMatch::deleteAll();
//        echo "\n\r";
//    }

    private function save($url)
    {
        $raw = file_get_contents($url);
        $data = json_decode($raw, true);


        foreach ($data as $d) {
//            $match = new EventsMatch();
//            $match->_id = $d['_id'];
//            $match->save();


            $event = Events::find()->where(['_id' => $d['_id']])->one();
            if (!$event) {
                $event = New Events();
                $event->setAttributes($d);
                $event->lat = $d['location'][0];
                $event->lon = $d['location'][1];
                $event->image_id = $d['image']['image_id'];
                $event->image_path = $d['image']['path'];

                $event->title_is = $d['language']['is']['title'];
                $event->title_en = $d['language']['en']['title'];
                $event->text_is = $d['language']['is']['text'];
                $event->text_en = $d['language']['en']['text'];
                $event->place_en = $d['language']['en']['place'];
                $event->place_is = $d['language']['is']['place'];
                $event->raw = json_encode($d);

                if (!$event->save()) {
                    print_r($event->getErrors());
                    die;
                } else {
                    foreach ($d['language']['en']['tags'] as $tag) {
                        $tags = new Tags();
                        $tags->name = $tag;
                        $tags->event_id = $event->id;
                        $tags->ln = 'en';
                        $tags->save();
                    }

                    foreach ($d['language']['is']['tags'] as $tag) {
                        $tags = new Tags();
                        $tags->event_id = $event->id;
                        $tags->name = $tag;
                        $tags->ln = 'is';
                        $tags->save();
                    }
                    echo $event->_id;
                    echo " Saved\n\r";
                }
            } else {
                if ($event->deleted) {
                    $event->deleted = 0;
                    $event->save();

                    echo "Was Deleted!\n\r";
                }
                echo "Exist\n\r";
            }
        }


        return count($data);
    }

    public function actionSetDates()
    {
        Events::updateAll(['max' => "0000-00-00 00:00:00", 'min' => "0000-00-00 00:00:00"]);
        $events = Events::find()
            ->select(['COUNT(*) as co', 'title_is', 'place_is'])
            ->groupBy('title_is, place_is')
            ->having('co > 1')
//            ->where(['id'=>[589,608,636,663]])
//            ->offset(2)
            ->asArray()->all();


        foreach ($events as $event) {
            $e = Events::find()->select(['id', 'start'])->where(['title_is' => $event['title_is'], 'place_is' => $event['place_is']])->orderBy('start')->all();
            $pre_start = '';
            $min = '';


            $ids = [];
            foreach ($e as $item) {

                if (!$min) {
                    $min = $item->start;
                }


                if ($pre_start) {
                    echo $item->id;
                    echo " - ";
                    echo $pre_start;
                    echo " - ";
                    echo $item->start;
                    echo " - ";
                    echo strtotime($item->start) - strtotime($pre_start);
//                    if ((strtotime($item->start) - strtotime($pre_start)) > 86400) {
                    if ((strtotime($item->start) - strtotime($pre_start)) > (86400+(5*60*60))) {
                        echo '-----';
                        echo "\n\r\tmax: " . $pre_start . "\n\r";
                        echo "\n\r\tmin: " . $min . "\n\r";

                        $upd = Events::updateAll(['max' => $pre_start, 'min' => $min], ['in', 'id', $ids]);

                        var_dump($upd);
                        print_r($ids);
                        $ids = [];
                        $min = $item->start;
                    }
                } else {
                    echo $item->id;
                }
                $ids[] = $item->id;
                $pre_start = $item->start;
                echo "\n\r";
            }
            if(!empty($ids)){
                echo 'Last';
                $upd = Events::updateAll(['max' => $pre_start, 'min' => $min], ['in', 'id', $ids]);
                print_r($ids);
            }
        }
    }
}
