import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const NotificationBell = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleClick = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="bell-container">
      <div className="notification-icon" onClick={handleClick}>
        <FontAwesomeIcon icon={faBell} />
        <div className="notification-badge"></div>
      </div>
      {showNotifications && (
        <div className="notification-list">
          <ul>
            <li>Notification 1</li>
            <li>Notification 2</li>
            <li>Notification 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
