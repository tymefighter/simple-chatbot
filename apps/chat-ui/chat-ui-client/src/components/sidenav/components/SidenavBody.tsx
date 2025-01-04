// Types
import type { Conversation } from '../types';

interface SidenavBodyProps {
  conversations: Conversation[];
  onSelectConversation: (conversationId: number) => void;
}

export const SidenavBody = ({ conversations, onSelectConversation }: SidenavBodyProps): JSX.Element => {
  return <div />
}

