// Libraries
import useSWR from 'swr';

// Utils
import { fetcher } from 'utils';

// Types
import type { Conversation } from '../types';

interface Output {
  isLoading: boolean;
  conversations: Conversation[] | undefined;
}

export const useConversations = (): Output => {
  const { data: conversations, isLoading } = useSWR<Conversation[]>('/conversations', fetcher);
  
  return {
    conversations,
    isLoading
  };
}
