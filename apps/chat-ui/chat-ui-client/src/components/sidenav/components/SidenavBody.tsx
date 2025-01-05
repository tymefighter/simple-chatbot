// Libraries
import { useCallback } from 'react';

// Components
import { StartConversationButton } from './StartConversationButton';

// Types
import type { Conversation } from '../types';

// Styles
import './SidenavBody.css';

interface SidenavConversationProps {
  conversation: Conversation;
  onSelectConversation: (conversationId: number) => void;
}

const SidenavConversation = ({ conversation, onSelectConversation }: SidenavConversationProps): JSX.Element => {
  const conversationId = conversation.id;
  const onClick = useCallback(() => {
    onSelectConversation(conversationId);
  }, [conversationId, onSelectConversation]);

  return (
    <div className="sidenav-conversation" role="button" onClick={onClick}>
      <p className="sidenav-conversation-name">
        {conversation.name}
      </p>
    </div>
  );
}

interface SidenavBodyProps {
  conversations: Conversation[];
  onSelectConversation: (conversationId: number) => void;
}

export const SidenavBody = ({ conversations, onSelectConversation }: SidenavBodyProps): JSX.Element => (
  <div className="sidenav-body">
    <div className="sidenav-conversations">
      {conversations.map((conversation: Conversation): JSX.Element => (
        <SidenavConversation 
          key={conversation.id} 
          conversation={conversation} 
          onSelectConversation={onSelectConversation} 
        />
      ))}
    </div>
    <div className="sidenav-footer">
      <StartConversationButton onSelectConversation={onSelectConversation} />
    </div>
  </div>
);
