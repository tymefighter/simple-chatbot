// Components
import { EmptyChatWindow } from './components/EmptyChatWindow';
import { ChatWindowTombstone } from './components/ChatWindowTombstone';
import { ChatWindowError } from './components/ChatWindowError';
import { ChatWindowBody } from './components/ChatWindowBody';

// Hooks
import { useChatMessages } from './hooks/useChatMessages';

interface ChatWindowProps {
  conversationId: number | undefined;
}

export const ChatWindow = ({ conversationId }: ChatWindowProps): JSX.Element => {
  
  const { messages, isLoading } = useChatMessages({ conversationId });
  
  if (!conversationId) {
    return (
      <EmptyChatWindow />
    );
  }

  if (isLoading) {
    return (
      <ChatWindowTombstone />
    );
  }

  if (!messages) {
    return (
      <ChatWindowError />
    );
  }

  return (
    <ChatWindowBody 
      conversationId={conversationId}
      messages={messages}
    />
  );
}
