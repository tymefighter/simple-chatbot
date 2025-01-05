// Components
import { SidenavTombstone } from './components/SidenavTombstone';
import { SidenavError } from './components/SidenavError';
import { EmptySidenav } from './components/EmptySidenav';
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

  if (!conversations.length) {
    return (
      <EmptySidenav onSelectConversation={onSelectConversation} />
    );
  }

  return (
    <SidenavBody conversations={conversations} onSelectConversation={onSelectConversation} />
  );
}
