// Libraries
import { useState, useCallback } from 'react';

// Components
import { AppLayout, SlotName } from './components/AppLayout';
import { Sidenav } from 'components/sidenav';
import { ChatWindow } from 'components/chatWindow';

export const App = (): JSX.Element => {
  const [conversationId, setConversationId] = useState<number>();

  const onSelectConversation = useCallback((conversationId: number): void => {
    setConversationId(conversationId);
  }, []);

  return (
    <AppLayout>
      <AppLayout.Slot name={SlotName.SIDE_NAV}>
        <Sidenav onSelectConversation={onSelectConversation} />
      </AppLayout.Slot>
      <AppLayout.Slot name={SlotName.MAIN}>
      <ChatWindow conversationId={conversationId} />
      </AppLayout.Slot>
    </AppLayout>
  );
}
