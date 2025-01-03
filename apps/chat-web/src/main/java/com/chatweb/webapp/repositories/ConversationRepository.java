package com.chatweb.webapp.repositories;

import com.chatweb.webapp.entities.Conversation;
import org.springframework.data.repository.ListCrudRepository;

public interface ConversationRepository extends ListCrudRepository<Conversation, Long> {
}
