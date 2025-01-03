package com.chatweb.webapp.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("chatMessage")
public class ChatMessage {

  @Id
  private Long id;
  private Long conversationId;
  private String message;
  private Author author;

  public ChatMessage() {
  }

  public ChatMessage(Long conversationId, String message, Author author) {
    this.conversationId = conversationId;
    this.message = message;
    this.author = author;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getConversationId() {
    return conversationId;
  }

  public void setConversationId(Long conversationId) {
    this.conversationId = conversationId;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public Author getAuthor() {
    return author;
  }

  public void setAuthor(Author author) {
    this.author = author;
  }
}
