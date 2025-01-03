package com.chatweb.webapp.ai;

import com.chatweb.webapp.entities.ChatMessage;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class ChatEngineRequestService {

  private static final Logger logger = LoggerFactory.getLogger(ChatEngineRequestService.class);

  private final KafkaTemplate<String, ChatEngineRequest> template;

  @Autowired
  public ChatEngineRequestService(KafkaTemplate<String, ChatEngineRequest> template) {
    this.template = template;
  }

  public void sendChatMessageToChatEngine(ChatMessage message) {
    ChatEngineRequest chatEngineRequest =
        new ChatEngineRequest(message.getId(), message.getConversationId(), message.getMessage());

    logger.info("[ChatEngineRequestService] sending chat engine request {} to chat engine",
        new Gson().toJson(chatEngineRequest));

    template.send(ChatEngineConstants.CHAT_ENGINE_REQUEST_TOPIC, chatEngineRequest);
  }
}
