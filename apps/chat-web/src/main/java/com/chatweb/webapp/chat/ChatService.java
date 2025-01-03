package com.chatweb.webapp.chat;

import com.chatweb.webapp.ai.ChatEngineRequestService;
import com.chatweb.webapp.entities.ChatMessage;
import com.chatweb.webapp.repositories.ChatMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatService {

  private final ChatMessageRepository chatMessageRepository;
  private final ChatEngineRequestService chatEngineRequestService;

  @Autowired
  public ChatService(ChatMessageRepository chatMessageRepository,
                     ChatEngineRequestService chatEngineRequestService) {
    this.chatMessageRepository = chatMessageRepository;
    this.chatEngineRequestService = chatEngineRequestService;
  }

  public ChatMessage saveMessage(ChatMessage chatMessage) {
    ChatMessage savedChatMessage = chatMessageRepository.save(chatMessage);
    chatEngineRequestService.sendChatMessageToChatEngine(savedChatMessage);
    return savedChatMessage;
  }
}
