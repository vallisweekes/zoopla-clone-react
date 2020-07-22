import React from 'react';
import './close-button.styles.css';

const CloseButton = ({ handleSideDrawerOpen }) => {
	return (
		<div className='close-button' onClick={handleSideDrawerOpen}>
			<img src='close.svg' />
		</div>
	);
};

CloseButton.propTypes = {};

export default CloseButton;
