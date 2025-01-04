// Components
import { ChatMessage } from './ChatMessage';

// Types
import type { ChatMessage as ChatMessageType } from '../types';

interface ChatWindowBodyProps {
  messages: ChatMessageType[]
}

export const ChatWindowBody = ({ messages }: ChatWindowBodyProps): JSX.Element => (
  <div>
    {messages.map(
      (message: ChatMessageType): JSX.Element => (
        <ChatMessage key={message.id} message={message} />
      )
    )}
  </div>
);
