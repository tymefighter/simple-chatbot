// Libraries
import useSWR from 'swr';

// Utils
import { fetcher } from 'utils';

// Types
import type { ChatMessage } from '../types';

interface Input {
  conversationId: number | undefined;
}

interface Output {
  isLoading: boolean;
  messages: ChatMessage[] | undefined;
}

export const useChatMessages = ({ conversationId }: Input): Output => {
  const { data: messages, isLoading } = useSWR<ChatMessage[]>(
    conversationId ? `/conversations/${conversationId}/messages` : undefined, 
    fetcher
  );
  
  return {
    messages,
    isLoading
  };
}
