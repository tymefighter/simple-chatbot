package com.chatweb.webapp.ai;

public class ChatEngineResponse {

  private Long sourceMessageId;
  private Long conversationId;
  private String message;

  public Long getSourceMessageId() {
    return sourceMessageId;
  }

  public void setSourceMessageId(Long sourceMessageId) {
    this.sourceMessageId = sourceMessageId;
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
}
