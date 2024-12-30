import json
import uuid
from confluent_kafka import Producer
from constants import Constants

class ChatEngineKafkaProducer:
  
  def __init__(self):
    self.producer = Producer({
      "bootstrap.servers": Constants.KAFKA_BOOTSTRAP_SERVERS
    })

  def send_engine_response(self, chat_engine_response):
    message_key = str(uuid.uuid4())
    message = json.dumps(chat_engine_response.__dict__)

    print("Sending message on topic with key {} and value {}"
          .format(Constants.CHAT_ENGINE_RESPONSE_KAFKA_TOPIC, message_key, message))
    
    self.producer.produce(Constants.CHAT_ENGINE_RESPONSE_KAFKA_TOPIC, key=message_key, value=message)
    self.producer.flush()
