// Libraries
import useSWRMutation from 'swr/mutation'

// Utils
import { mutator } from 'utils';

// Types
import type { Conversation } from '../types';

interface Output {
  createConversation: (conversation: Conversation) => Promise<Conversation>;
  isConversationCreationInProgress: boolean;
}

export const useCreateConversation = (): Output => {
  const { trigger, isMutating } = useSWRMutation('/conversations', mutator<Conversation>);

  return {
    createConversation: trigger,
    isConversationCreationInProgress: isMutating
  };
}
