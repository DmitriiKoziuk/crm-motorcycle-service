<?php
namespace backend\modules\v1\components;

use Yii;
use yii\db\ActiveQuery;
use yii\helpers\ArrayHelper;
use backend\modules\v1\models\Client;
use backend\modules\v1\models\ClientTelephone;

class ClientAction
{
    public static function create(array $params)
    {
        $transaction = Yii::$app->db->beginTransaction();

        try {
            $client = new Client();
            $client->setAttributes($params);

            if (! $client->validate()) {
                throw new \Exception('Client attribute validation error');
            }

            if (! $client->save()) {
                throw new \Exception('Can\'t save client');
            }

            if (empty($params['telephones']) ) {
                throw new \Exception('Client telephone not set');
            }

            foreach ($params['telephones'] as $telephone) {
                $clientTelephone            = new ClientTelephone();
                $clientTelephone->client_id = $client->id;
                $clientTelephone->setAttributes($telephone);

                if (! $clientTelephone->validate()) {
                    throw new \Exception('Client telephone validation error');
                }

                if (! $clientTelephone->save()) {
                    throw new \Exception('Can\'t save client telephone');
                }
            }

            $transaction->commit();
        } catch (\Exception $e) {
            $transaction->rollBack();
            throw new \Exception($e->getMessage());
        }

        return $client;
    }

    public static function update($id, array $params)
    {
        $transaction = Yii::$app->db->beginTransaction();

        try {
            /** @var Client $client */
            $client = Client::find()
                ->with([
                    'telephones' => function ($q) {
                        /** @var $q ActiveQuery */
                        $q->indexBy('number');
                    }
                ])
                ->where(['id' => $id])
                ->one();

            if (empty($client)) {
                throw new \Exception("Can't find client with id - {$id}");
            }

            $client->setAttributes($params);

            if (! $client->validate()) {
                throw new \Exception('Client attribute validation error');
            }

            if (! $client->save()) {
                throw new \Exception('Can\'t save client');
            }

            if (! empty($params['telephones'])) {
                $updatedTelephones = ArrayHelper::map($params['telephones'], 'number', 'note');

                foreach ($client->telephones as $telephone) {
                    if (array_key_exists($telephone->number, $updatedTelephones)) {
                        if ($telephone->note != $updatedTelephones[ $telephone->number ]) {
                            $telephone->note = $updatedTelephones[ $telephone->number ];
                            if (! $telephone->validate()) {
                                throw new \Exception('Client telephone attribute validation error');
                            }

                            if (! $telephone->save()) {
                                throw new \Exception('Can\'t save new client telephone');
                            }
                        }
                        unset($updatedTelephones[ $telephone->number ]);
                    } else {
                        $telephone->delete();
                    }
                }
                unset($client->telephones);

                foreach ($updatedTelephones as $number => $note) {
                    $newTelephone            = new ClientTelephone();
                    $newTelephone->client_id = $client->id;
                    $newTelephone->number    = $number;
                    $newTelephone->note      = $note;

                    if (! $newTelephone->validate()) {
                        throw new \Exception('Client telephone attribute validation error');
                    }

                    if (! $newTelephone->save()) {
                        throw new \Exception('Can\'t save new client telephone');
                    }
                }
            } else {
                foreach ($client->telephones as $telephone) {
                   $telephone->delete();
                }
            }


            $transaction->commit();
            return $client;
        } catch (\Exception $e) {
            $transaction->rollBack();
            throw new \Exception($e->getMessage());
        }
    }
}