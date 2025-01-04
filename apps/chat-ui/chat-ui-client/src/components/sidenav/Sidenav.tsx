// Components
import { SidenavTombstone } from './components/SidenavTombstone';
import { SidenavError } from './components/SidenavError';
import { SidenavBody } from './components/SidenavBody';

// Hooks
import { useConversations } from './hooks/useConversations';

interface SidenavProps {
  onSelectConversation: (conversationId: number) => void;
}

export const Sidenav = ({ onSelectConversation }: SidenavProps): JSX.Element => {
  const { isLoading, conversations } = useConversations();

  if (isLoading) {
    return (
      <SidenavTombstone />
    );
  }

  if (!conversations) {
    return (
      <SidenavError />
    );
  }

  return (
    <SidenavBody conversations={conversations} onSelectConversation={onSelectConversation} />
  );
}
