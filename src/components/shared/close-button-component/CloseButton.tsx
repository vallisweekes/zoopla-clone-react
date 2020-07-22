import React from 'react';

import './close-button.styles.css';

interface ICloseButtonProps {
  handleSideDrawerOpen: () => void;
}
const CloseButton: React.FC<ICloseButtonProps> = ({ handleSideDrawerOpen }) => {
  return (
    <div className="close-button" onClick={handleSideDrawerOpen}>
      <img src="close.svg" />
    </div>
  );
};

export default CloseButton;
