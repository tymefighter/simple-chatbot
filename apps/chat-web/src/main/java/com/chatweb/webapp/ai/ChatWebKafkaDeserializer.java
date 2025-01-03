package com.chatweb.webapp.ai;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.type.TypeFactory;
import org.apache.kafka.common.header.Headers;
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.kafka.support.serializer.JsonTypeResolver;

public class ChatWebKafkaDeserializer<T> extends JsonDeserializer<T> {

  public ChatWebKafkaDeserializer() {
    super();
    setTypeResolver(new ChatWebKafka());
  }

  private static class ChatWebKafka implements JsonTypeResolver {

    @Override
    public JavaType resolveType(String topic, byte[] data, Headers headers) {
      if (ChatEngineConstants.CHAT_ENGINE_RESPONSE_TOPIC.equals(topic)) {
        return TypeFactory.defaultInstance().constructType(ChatEngineResponse.class);
      }

      return null;
    }
  }
}
