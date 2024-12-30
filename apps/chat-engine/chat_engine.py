import keras_hub
from constants import Constants
from chat_engine_response import ChatEngineResponse

class ChatEngine:
  
  def __init__(self):
    self.model = keras_hub.models.GPT2CausalLM.from_preset(Constants.GPT_2_MODEL_PRESET)

  def generate(self, chat_engine_request):
    request_message = chat_engine_request.get_message()
    print("Generating response for message {}".format(request_message))
    response_message = self.model.generate(request_message, strip_prompt=True)
    print("Generated response {} for message {}".format(response_message, request_message))
    return ChatEngineResponse(response_message)
