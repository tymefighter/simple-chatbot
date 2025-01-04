// Libraries
import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

// Hooks
import { useCreateConversation } from '../hooks/useCreateConversation';

// Types
import type { Conversation } from '../types';

interface ConversationModalProps {
  onSelectConversation: (conversationId: number) => void;
  onClose: () => void;
}

export const ConversationModal = ({ onSelectConversation, onClose }: ConversationModalProps): JSX.Element => {
  const [name, setName] = useState('');

  const { createConversation, isConversationCreationInProgress } = useCreateConversation();

  const onSave = useCallback(async () => {
    const createdConversation = await createConversation({
      name,
    } as Conversation);

    onSelectConversation(createdConversation.id);

    onClose();
  }, [name, createConversation, onSelectConversation]);

  return createPortal(
    <div>
      <h3>
        Start a new conversation
      </h3>
      <div>
        <label htmlFor="conversation-name">Conversation Name</label>
        <input id="conversation-name" value={name} placeholder="Conversation Name" />
      </div>
      <div>
        <button onClick={onClose}>
          Cancel
        </button>
        <button onClick={onSave}>
          Save
        </button>
      </div>
    </div>,
    document.body
  );
}
