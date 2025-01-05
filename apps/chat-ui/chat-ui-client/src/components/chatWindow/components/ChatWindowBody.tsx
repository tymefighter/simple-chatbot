// Libraries
import { useRef, useEffect } from 'react';

// Components
import { ChatMessage } from './ChatMessage';
import { ChatMessageInput } from './ChatMessageInput';

// Types
import type { ChatMessage as ChatMessageType } from '../types';

// Styles
import './ChatWindowBody.css';

interface ChatWindowBodyProps {
  conversationId: number;
  messages: ChatMessageType[]
}

export const ChatWindowBody = ({ conversationId, messages }: ChatWindowBodyProps): JSX.Element => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom of messages when messages change
    endOfMessagesRef.current?.scrollIntoView?.({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-window-body">
      <div className="chat-window-messages">
        {messages.map((message: ChatMessageType): JSX.Element => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={endOfMessagesRef} />
      </div>
      <div className="chat-window-footer">
        <ChatMessageInput conversationId={conversationId} />
      </div>
    </div>
  );
}
