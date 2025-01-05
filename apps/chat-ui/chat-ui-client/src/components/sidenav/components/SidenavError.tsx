// Styles
import './SidenavError.css';

export const SidenavError = (): JSX.Element => (
  <div className="empty-sidenav-container">
    <p className="empty-sidenav-text">
      Some error occurred while fetching conversations
    </p>
  </div>
);
