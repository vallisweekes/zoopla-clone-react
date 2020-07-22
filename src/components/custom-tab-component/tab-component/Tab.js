import React from 'react';

const Tab = ({ label, active, handleActive }) => {
	return (
		<li>
			<a>
				<span className={active.label === label.toLowerCase() ? 'tabs tab-active' : 'tab'} onClick={() => handleActive(label)}>
					{label}
				</span>
			</a>
		</li>
	);
};

export default Tab;
