<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Game;

/**
 * GameSearch represents the model behind the search form of `app\models\Game`.
 */
class GameSearch extends Game
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['title', 'key', 'qr', 'desciption', 'img'], 'safe'],
            [['lat', 'lon'], 'number'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Game::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'lat' => $this->lat,
            'lon' => $this->lon,
        ]);

        $query->andFilterWhere(['like', 'name_is', $this->name_is])
            ->andFilterWhere(['like', 'name_en', $this->name_en])
            ->andFilterWhere(['like', 'key', $this->key])
            ->andFilterWhere(['like', 'qr', $this->qr])
            ->andFilterWhere(['like', 'question_is', $this->question_is])
            ->andFilterWhere(['like', 'question_en', $this->question_en]);
//            ->andFilterWhere(['like', 'img', $this->img]);

        return $dataProvider;
    }
}
