class ChatEngineResponse:

  def __init__(self, source_message_id, conversation_id, message):
    self.source_message_id = source_message_id
    self.conversation_id = conversation_id
    self.message = message

  def get_source_message_id(self):
    return self.source_message_id
  
  def get_conversation_id(self):
    return self.conversation_id
  
  def get_message(self):
    return self.message
