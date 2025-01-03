package com.chatweb.webapp.ai;

public class ChatEngineRequest {

  private Long sourceMessageId;
  private Long conversationId;
  private String message;

  public ChatEngineRequest() {
  }

  public ChatEngineRequest(Long sourceMessageId, Long conversationId, String message) {
    this.sourceMessageId = sourceMessageId;
    this.conversationId = conversationId;
    this.message = message;
  }

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
