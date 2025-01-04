// Libraries
import { useState, useCallback } from 'react';

// Components
import { Sidenav } from 'components/sidenav';
import { ChatWindow } from 'components/chatWindow';

// Styles
import './App.css';

export const App = (): JSX.Element => {
  const [conversationId, setConversationId] = useState<number>();

  const onSelectConversation = useCallback((conversationId: number): void => {
    setConversationId(conversationId);
  }, []);

  return (
    <div className="App">
      <Sidenav onSelectConversation={onSelectConversation} />
      <ChatWindow conversationId={conversationId} />
    </div>
  );
}