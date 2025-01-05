// Libraries
import { useState, useCallback, type ChangeEvent } from 'react';

// Components
import { Modal } from 'components/modal'; 

// Hooks
import { useCreateConversation } from '../hooks/useCreateConversation';

// Types
import type { Conversation } from '../types';

// Styles
import './ConversationModal.css';

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

  const onNameInputChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  }, []);

  return (
    <Modal>
      <Modal.Header>
        Start a new conversation
      </Modal.Header>
      <Modal.Body>
        <div className="conversation-modal-body">
          <label className="conversation-name-label" htmlFor="conversation-name">Conversation Name:</label>
          <input 
            id="conversation-name"
            className="conversation-name-input" 
            placeholder="Enter Conversation Name" 
            value={name} 
            onChange={onNameInputChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer onClose={onClose} onSave={onSave} isSaving={isConversationCreationInProgress} />
    </Modal>
  );
}
