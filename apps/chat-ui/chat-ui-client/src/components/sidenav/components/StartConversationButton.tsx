// Libraries
import { useState, useCallback } from 'react';

// Components
import { ConversationModal } from './ConversationModal';

interface StartConversationButtonProps {
  onSelectConversation: (conversationId: number) => void;
}

export const StartConversationButton = ({ onSelectConversation }: StartConversationButtonProps): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const onClick = useCallback(() => setShowModal(true), []);
  const onClose = useCallback(() => setShowModal(false), []);

  return (
    <>
      <button onClick={onClick}>
        Start a new conversation
      </button>
      {showModal ? (
        <ConversationModal onSelectConversation={onSelectConversation} onClose={onClose} />
      ) : null}
    </>
  );
}
