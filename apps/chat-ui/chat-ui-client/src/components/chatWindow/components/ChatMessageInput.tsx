// Libraries
import { useState, useCallback, useEffect, type ChangeEvent } from 'react';

// Hooks
import { useSendChatMessage } from '../hooks/useSendChatMessage';

// Constants
import { Author } from '../constants';

// Types
import type { ChatMessage } from '../types';

// Styles
import './ChatMessageInput.css';

interface ChatMessageInputProps {
  conversationId: number;
}

export const ChatMessageInput = ({ conversationId }: ChatMessageInputProps): JSX.Element => {
  const [message, setMessage] = useState('');

  const onMessageInputChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  }, []);

  const { sendChatMessage, isChatMessageBeingSent } = useSendChatMessage({ conversationId });
  const onClick = useCallback(async () => {
    await sendChatMessage({
      conversationId,
      message,
      author: Author.USER
    } as ChatMessage);

    setMessage('');
  }, [conversationId, message, sendChatMessage]);

  useEffect(() => {
    const onEnterKeyPress = (event: KeyboardEvent): void => {
      if (event.key === 'Enter') {
        onClick();
      }
    };
    
    document.addEventListener('keydown', onEnterKeyPress);

    return () => {
      document.removeEventListener('keydown', onEnterKeyPress);
    };
  }, [onClick]);

  return (
    <div className="chat-message-input-container">
      <input 
        aria-label="Chat Message"
        id="chat-message-input"
        className="chat-message-input" 
        placeholder="Enter message" 
        value={message} 
        onChange={onMessageInputChange}
      />
      <button 
        className="chat-message-send-button" 
        disabled={isChatMessageBeingSent} 
        onClick={onClick}
      >
        Send
      </button>
    </div>
  );
}
