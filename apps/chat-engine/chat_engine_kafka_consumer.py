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
      "auto.offset.reset": "earliest",
      "enable.auto.commit": False
    })

    print("Subscribing for topic {}".format(Constants.CHAT_ENGINE_REQUEST_KAFKA_TOPIC))
    self.consumer.subscribe([Constants.CHAT_ENGINE_REQUEST_KAFKA_TOPIC], on_assign=self.on_assign)
    print("Subscribed for topic {}".format(Constants.CHAT_ENGINE_REQUEST_KAFKA_TOPIC))

  def on_assign(self, consumer, partitions):
    for partition in partitions:
        print(f'Assigned to {partition.topic}, partition {partition.partition}')
  
  def begin_consumption(self):
    try:
      while True:
        event = self.consumer.poll(Constants.KAFKA_CONSUMER_POLL_TIME_SECS)
        if event is None:
          continue
        elif event.error():
          print("Error while polling for message: {}".format(event.error()))
        else:
          message = event.value().decode('utf-8')
          print("Consuming message: key: {}, value: {}, partition: {}".format(event.key(), message, event.partition()))

          engine_response_dict = json.load(message)
          chat_engine_request = ChatEngineRequest(engine_response_dict.get("message"))

          chat_engine_response = self.chat_engine.generate(chat_engine_request)
          self.chat_engine_kafka_producer.send_engine_response(chat_engine_response)

          self.consumer.commit(event)
    finally:
      print("Consumption ended, closing consumer")
      self.consumer.close()
