<?php

namespace app\controllers;

use Yii;
use app\models\Safnanott;
use app\models\SafnanottSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * AdminController implements the CRUD actions for Safnanott model.
 */
class AdminController extends Controller
{
    public $layout = 'yii2';

    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Safnanott models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new SafnanottSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Safnanott model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Safnanott model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Safnanott();

        if ($model->load(Yii::$app->request->post())) {
            if ($model->logo = UploadedFile::getInstance($model, 'logo')) {
                $path = 'img/safnanott/';
                @mkdir($path, 0777, true);
                $model->logo->saveAs($path . $model->logo->baseName . '.' . $model->logo->extension);

            }

            if ($model->image = UploadedFile::getInstance($model, 'image')) {
                $path = 'img/safnanott/image/';
                @mkdir($path, 0777, true);
                $model->image->saveAs($path . $model->image->baseName . '.' . $model->image->extension);
            }


            if ($model->image_big = UploadedFile::getInstance($model, 'image_big')) {
                $path = 'img/safnanott/image_big/';
                @mkdir($path, 0777, true);
                $model->image_big->saveAs($path . $model->image_big->baseName . '.' . $model->image_big->extension);
            }


            if ($model->save()) {
                return $this->redirect(['index']);
            }
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Safnanott model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $s = Safnanott::findOne($id);


//        print_r(pathinfo($s->logo['basename']));
//        die;

        if ($model->load(Yii::$app->request->post())) {

            if ($model->logo = UploadedFile::getInstance($model, 'logo')) {
//                $model->logo = UploadedFile::getInstance($model, 'logo');

                $path = 'img/safnanott/';
                @mkdir($path, 0777, true);
                $model->logo->saveAs($path . $model->logo->baseName . '.' . $model->logo->extension);
            } else if ($s->logo) {
                $model->logo = pathinfo($s->logo)['basename'];
            }


            if (UploadedFile::getInstance($model, 'image')) {
                $model->image = UploadedFile::getInstance($model, 'image');

                $path = 'img/safnanott/image/';
                @mkdir($path, 0777, true);
                $model->image->saveAs($path . $model->image->baseName . '.' . $model->image->extension);
            } elseif ($s->image) {
                $model->image = pathinfo($s->image)['basename'];
            }

            if (UploadedFile::getInstance($model, 'image_big')) {
                $model->image_big = UploadedFile::getInstance($model, 'image_big');

                $path = 'img/safnanott/image_big/';
                @mkdir($path, 0777, true);
                $model->image_big->saveAs($path . $model->image_big->baseName . '.' . $model->image_big->extension);
            } elseif ($s->image_big) {
                $model->image_big = pathinfo($s->image_big)['basename'];
            }


            if ($model->save()) {
                return $this->redirect(['index']);
            }
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Safnanott model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Safnanott model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Safnanott the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Safnanott::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
