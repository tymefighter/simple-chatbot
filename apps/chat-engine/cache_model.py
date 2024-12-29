import keras_hub
from constants import Constants

# Caches model for use
keras_hub.models.GPT2CausalLM.from_preset(Constants.GPT_2_MODEL_PRESET)
