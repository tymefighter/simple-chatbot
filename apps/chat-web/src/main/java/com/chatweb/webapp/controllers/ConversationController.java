package com.chatweb.webapp.controllers;

import com.chatweb.webapp.entities.Conversation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/conversations")
public class ConversationController {

  @GetMapping
  public List<Conversation> getConversations() {
    return null;
  }

  @PostMapping
  public Conversation createConversation(@RequestBody Conversation conversation) {
    return null;
  }

  @GetMapping("/{id}")
  public Conversation getConversation(@PathVariable("id") String id) {
    return null;
  }

  @PutMapping("/{id}")
  public Conversation updateConversation(@PathVariable("id") String id, @RequestBody Conversation conversation) {
    return null;
  }
}
