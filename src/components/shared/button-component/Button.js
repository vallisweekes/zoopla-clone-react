import React from 'react';

import './button.styles.css';
const Button = ({ invert, content }) => {
	return (
		<div className={invert ? 'default-btn invert' : ' default-btn normal'}>
			<a>{content}</a>
		</div>
	);
};

export default Button;
