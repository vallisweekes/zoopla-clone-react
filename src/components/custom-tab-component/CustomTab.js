import React from 'react';

import './custom-tab.styles.css';

const CustomTab = ({ children }) => {
	return (
		<React.Fragment>
			<ul className='header-tab'>{children}</ul>
		</React.Fragment>
	);
};

export default CustomTab;
