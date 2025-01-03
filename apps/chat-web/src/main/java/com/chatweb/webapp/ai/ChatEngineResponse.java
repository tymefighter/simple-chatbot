package com.chatweb.webapp.ai;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChatEngineResponse {

  @JsonProperty("source_message_id")
  private Long sourceMessageId;

  @JsonProperty("conversation_id")
  private Long conversationId;

  @JsonProperty("message")
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
