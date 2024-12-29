from confluent_kafka import Consumer
from constants import Constants

class ChatEngineKafkaProducer:
  
  def __init__(self, chat_engine):
    self.chat_engine = chat_engine

    self.consumer = Consumer({
      "bootstrap.servers": Constants.KAFKA_BOOTSTRAP_SERVERS,
      "group.id": Constants.KAFKA_REQUEST_CONSUMER_GROUP_ID,
      "auto.offset.reset": "earliest"
    })

    self.consumer.subscribe([Constants.CHAT_ENGINE_REQUEST_KAFKA_TOPIC])
  
  def begin_polling(self):
    while True:
      message = self.consumer.poll(Constants.KAFKA_CONSUMER_POLL_TIME_SECS)
      if message is None:
        continue
      elif message.error():
        print("Error while polling for message: {}".format(message))
      else:
        message_value = message.value().decode('utf-8')
        print("Consuming message: key: {}, value: {}".format(message.key(), message_value))

        
