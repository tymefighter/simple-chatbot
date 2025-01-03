package com.chatweb.webapp.repositories;

import com.chatweb.webapp.entities.ChatMessage;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface ChatMessageRepository extends ListCrudRepository<ChatMessage, Long> {

  List<ChatMessage> findByConversationId(Long conversationId);
}
