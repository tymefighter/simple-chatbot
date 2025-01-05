package com.chatweb.webapp.controllers;

import com.chatweb.webapp.chat.ChatService;
import com.chatweb.webapp.entities.Author;
import com.chatweb.webapp.entities.ChatMessage;
import com.chatweb.webapp.entities.Conversation;
import com.chatweb.webapp.repositories.ChatMessageRepository;
import com.chatweb.webapp.repositories.ConversationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/conversations")
public class ConversationController {

  private final ConversationRepository conversationRepository;
  private final ChatMessageRepository chatMessageRepository;
  private final ChatService chatService;

  @Autowired
  public ConversationController(ConversationRepository conversationRepository,
                                ChatMessageRepository chatMessageRepository,
                                ChatService chatService) {
    this.conversationRepository = conversationRepository;
    this.chatMessageRepository = chatMessageRepository;
    this.chatService = chatService;
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

  @PostMapping("/{id}/messages")
  public ChatMessage createMessage(@PathVariable("id") Long id, @RequestBody ChatMessage chatMessage) {
    if (!Objects.equals(chatMessage.getConversationId(), id)) {
      throw new RuntimeException(String.format(
          "Message conversation id %s does not match path conversation id %s", chatMessage.getConversationId(), id)
      );
    }

    chatMessage.setAuthor(Author.USER);

    return chatService.saveMessage(chatMessage);
  }
}
