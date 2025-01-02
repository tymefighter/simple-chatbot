package com.chatweb.webapp.entities;

import org.springframework.data.annotation.Id;


public class ChatMessage {

  @Id
  private String id;
  private String conversationId;
  private String message;
  private Author author;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getConversationId() {
    return conversationId;
  }

  public void setConversationId(String conversationId) {
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
