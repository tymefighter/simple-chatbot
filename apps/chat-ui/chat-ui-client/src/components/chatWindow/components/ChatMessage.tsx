// Constants
import { Author } from '../constants';

// Types
import type { ChatMessage as ChatMessageType } from '../types';

// Styles
import './ChatMessage.css';

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage = ({ message }: ChatMessageProps): JSX.Element => (
  <div className={`chat-window-message ${message.author === Author.AI ? 'chat-window-message-ai' : 'chat-window-message-user'}`}>
    <p className="chat-message-text">
      {message.message}
    </p>
  </div>
);
