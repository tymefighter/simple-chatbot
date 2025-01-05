

// Libraries
import useSWRMutation from 'swr/mutation'

// Utils
import { mutator } from 'utils';

// Types
import type { ChatMessage } from '../types';

interface Input {
  conversationId: number;
}

interface Output {
  sendChatMessage: (message: ChatMessage) => Promise<ChatMessage>;
  isChatMessageBeingSent: boolean;
}

export const useSendChatMessage = ({ conversationId }: Input): Output => {
  const { trigger, isMutating } = useSWRMutation(`/conversations/${conversationId}/messages`, mutator<ChatMessage>);

  return {
    sendChatMessage: trigger,
    isChatMessageBeingSent: isMutating
  };
}
