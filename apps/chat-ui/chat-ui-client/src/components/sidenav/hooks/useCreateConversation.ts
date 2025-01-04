// Libraries
import useSWRMutation from 'swr/mutation'

// Utils
import { getAPIPath } from 'utils/fetcher';

// Types
import type { Conversation } from '../types';

const createConversation = async (url: string, { arg }: { arg: Conversation }): Promise<Conversation> => {
  const res = await fetch(getAPIPath(url), {
    method: 'POST',
    body: JSON.stringify(arg)
  });

  return res.json();
}

interface Output {
  createConversation: (conversation: Conversation) => Promise<Conversation>;
  isConversationCreationInProgress: boolean;
}

export const useCreateConversation = (): Output => {
  const { trigger, isMutating } = useSWRMutation('/conversations', createConversation);

  return {
    createConversation: trigger,
    isConversationCreationInProgress: isMutating
  };
}
