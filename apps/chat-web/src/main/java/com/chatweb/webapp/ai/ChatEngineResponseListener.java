package com.chatweb.webapp.ai;

import com.chatweb.webapp.entities.Author;
import com.chatweb.webapp.entities.ChatMessage;
import com.chatweb.webapp.repositories.ChatMessageRepository;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class ChatEngineResponseListener {

  private static final Logger logger = LoggerFactory.getLogger(ChatEngineResponseListener.class);

  private static final String CHAT_ENGINE_RESPONSE_LISTENER_ID = "CHAT_ENGINE_RESPONSE_LISTENER";

  private final ChatMessageRepository chatMessageRepository;

  @Autowired
  public ChatEngineResponseListener(ChatMessageRepository chatMessageRepository) {
    this.chatMessageRepository = chatMessageRepository;
  }

  @KafkaListener(id = CHAT_ENGINE_RESPONSE_LISTENER_ID,
      topics = ChatEngineConstants.CHAT_ENGINE_RESPONSE_TOPIC,
      groupId = ChatEngineConstants.CONSUMER_GROUP_ID)
  public void listen(ChatEngineResponse chatEngineResponse) {
    logger.info("[ChatEngineResponseListener] received chat engine response {} from chat engine",
        new Gson().toJson(chatEngineResponse));

    ChatMessage chatMessage =
        new ChatMessage(chatEngineResponse.getConversationId(), chatEngineResponse.getMessage(), Author.AI);
    chatMessageRepository.save(chatMessage);
  }
}
