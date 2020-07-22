import React from 'react';
import './user-area.styles.css';

const UserArea = () => {
  return (
    <ul id="side-drawer-content-user">
      <li>
        <img src="settings.svg" />
      </li>
      <li>
        <img src="notification.svg" />
      </li>
      <li>
        <img src="star.svg" />
      </li>
      <li>
        <img src="mail.svg" />
      </li>
    </ul>
  );
};

export default UserArea;
