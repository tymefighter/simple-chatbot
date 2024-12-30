from chat_engine import ChatEngine
from chat_engine_kafka_producer import ChatEngineKafkaProducer
from chat_engine_kafka_consumer import ChatEngineKafkaConsumer

def main():
  # Initialize components
  print("Initializing chat engine components")

  chat_engine = ChatEngine()
  print("Started chat engine")

  chat_engine_kafka_producer = ChatEngineKafkaProducer()
  print("Started kafka producer")

  chat_engine_kafka_consumer = ChatEngineKafkaConsumer(chat_engine, chat_engine_kafka_producer)
  print("Started kafka consumer")

  # Begin Consumption
  print("Beginning consumption")
  chat_engine_kafka_consumer.begin_consumption()

main()
