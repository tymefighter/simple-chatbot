import json
from confluent_kafka import Consumer
from constants import Constants
from chat_engine_request import ChatEngineRequest

class ChatEngineKafkaConsumer:
  
  def __init__(self, chat_engine, chat_engine_kafka_producer):
    self.chat_engine = chat_engine
    self.chat_engine_kafka_producer = chat_engine_kafka_producer

    self.consumer = Consumer({
      "bootstrap.servers": Constants.KAFKA_BOOTSTRAP_SERVERS,
      "group.id": Constants.KAFKA_REQUEST_CONSUMER_GROUP_ID,
      "auto.offset.reset": "earliest"
    })

    print("Subscribing for topic {}".format(Constants.CHAT_ENGINE_REQUEST_KAFKA_TOPIC))
    self.consumer.subscribe([Constants.CHAT_ENGINE_REQUEST_KAFKA_TOPIC])
    print("Subscribed for topic {}".format(Constants.CHAT_ENGINE_REQUEST_KAFKA_TOPIC))
  
  def begin_consumption(self):
    while True:
      message = self.consumer.poll(Constants.KAFKA_CONSUMER_POLL_TIME_SECS)
      if message is None:
        continue
      elif message.error():
        print("Error while polling for message: {}".format(message))
      else:
        message_value = message.value().decode('utf-8')
        print("Consuming message: key: {}, value: {}".format(message.key(), message_value))

        engine_response_dict = json.load(message_value)
        chat_engine_request = ChatEngineRequest(engine_response_dict.get("message"))

        chat_engine_response = self.chat_engine.generate(chat_engine_request)
        self.chat_engine_kafka_producer.send_engine_response(chat_engine_response)
