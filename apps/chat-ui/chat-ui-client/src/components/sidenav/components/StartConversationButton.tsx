// Libraries
import { useState, useCallback } from 'react';

// Components
import { ConversationModal } from './ConversationModal';

// Styles
import './StartConversationButton.css';

interface StartConversationButtonProps {
  onSelectConversation: (conversationId: number) => void;
}

export const StartConversationButton = ({ onSelectConversation }: StartConversationButtonProps): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const onClick = useCallback(() => setShowModal(true), []);
  const onClose = useCallback(() => setShowModal(false), []);

  return (
    <>
      <button onClick={onClick} className="start-conversation-button">
        Start a new conversation
      </button>
      {showModal ? (
        <ConversationModal onSelectConversation={onSelectConversation} onClose={onClose} />
      ) : null}
    </>
  );
}
