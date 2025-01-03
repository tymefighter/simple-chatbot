package com.chatweb.webapp.controllers;

import com.chatweb.webapp.entities.ChatMessage;
import com.chatweb.webapp.entities.Conversation;
import com.chatweb.webapp.repositories.ChatMessageRepository;
import com.chatweb.webapp.repositories.ConversationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/conversations")
public class ConversationController {

  private final ConversationRepository conversationRepository;
  private final ChatMessageRepository chatMessageRepository;

  @Autowired
  public ConversationController(ConversationRepository conversationRepository,
                                ChatMessageRepository chatMessageRepository) {
    this.conversationRepository = conversationRepository;
    this.chatMessageRepository = chatMessageRepository;
  }

  @GetMapping
  public List<Conversation> getConversations() {
    return conversationRepository.findAll();
  }

  @PostMapping
  public Conversation createConversation(@RequestBody Conversation conversation) {
    return conversationRepository.save(conversation);
  }

  @PutMapping
  public Conversation updateConversation(@RequestBody Conversation conversation) {
    return conversationRepository.save(conversation);
  }

  @GetMapping("/{id}")
  public Conversation getConversation(@PathVariable("id") Long id) {
    return conversationRepository.findById(id).orElse(null);
  }

  @GetMapping("/{id}/messages")
  public List<ChatMessage> getConversationMessages(@PathVariable("id") Long id) {
    return chatMessageRepository.findByConversationId(id);
  }
}
