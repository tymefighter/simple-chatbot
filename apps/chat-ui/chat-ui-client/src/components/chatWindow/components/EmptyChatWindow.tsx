// Styles
import './EmptyChatWindow.css';

export const EmptyChatWindow = (): JSX.Element => (
  <div className="empty-chat-window-container">
    <p className="empty-chat-window-text">
      Please select a conversation to view chat messages
    </p>
  </div>
);
