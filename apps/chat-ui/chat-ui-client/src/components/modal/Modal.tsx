// Libraries
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

// Styles
import './Modal.css';

interface ModalHeaderProps {
  children: ReactNode;
}

const ModalHeader = ({ children }: ModalHeaderProps): JSX.Element => (
  <h2 className="modal-header">
    {children}
  </h2>
);

interface ModalBodyProps {
  children: ReactNode;
}

const ModalBody = ({ children }: ModalBodyProps): JSX.Element => (
  <div className="modal-body">
    {children}
  </div>
);

interface ModalFooterProps {
  onClose: () => void;
  onSave: () => void;
  isSaving?: boolean;
}

const ModalFooter = ({ onClose, onSave, isSaving }: ModalFooterProps): JSX.Element => (
  <div className="modal-footer">
    <button onClick={onClose} className="modal-button" disabled={isSaving}>
      Cancel
    </button>
    <button onClick={onSave} className="modal-button" disabled={isSaving}>
      Save
    </button>
  </div>
);

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps): JSX.Element => createPortal(
  <div className="modal-root">
    <div className="modal">
      {children}
    </div>
  </div>,
  document.body
);

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export { Modal };
