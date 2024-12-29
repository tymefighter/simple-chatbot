from chat_engine import ChatEngine
from chat_engine_kafka_producer import ChatEngineKafkaProducer
from chat_engine_kafka_consumer import ChatEngineKafkaConsumer

def main():
  # Initialize components
  chat_engine = ChatEngine()
  chat_engine_kafka_producer = ChatEngineKafkaProducer()
  chat_engine_kafka_consumer = ChatEngineKafkaConsumer(chat_engine, chat_engine_kafka_producer)

  # Begin Consumption
  chat_engine_kafka_consumer.begin_consumption()

main()
