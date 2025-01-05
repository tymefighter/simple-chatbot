// Styles
import './ChatWindowError.css';

export const ChatWindowError = (): JSX.Element => (
  <div className="empty-chat-window-container">
    <p className="empty-chat-window-text">
      Some error occurred while fetching chat messages
    </p>
  </div>
);
