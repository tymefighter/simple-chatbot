package com.chatweb.webapp.ai;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChatEngineRequest {

  @JsonProperty("source_message_id")
  private Long sourceMessageId;

  @JsonProperty("conversation_id")
  private Long conversationId;

  @JsonProperty("message")
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
