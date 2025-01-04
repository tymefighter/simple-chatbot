// Components
import { StartConversationButton } from './StartConversationButton';

// Styles
import './EmptySidenav.css';

interface EmptySidenavProps {
  onSelectConversation: (conversationId: number) => void;
}

export const EmptySidenav = ({ onSelectConversation }: EmptySidenavProps): JSX.Element => (
  <div className="empty-sidenav-container">
    <p className="empty-sidenav-text">
      No conversations yet
    </p>
    <StartConversationButton onSelectConversation={onSelectConversation} />
  </div>
);
