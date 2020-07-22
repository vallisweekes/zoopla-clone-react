import React from 'react';
import Chevron from '../../chevron-component/Chevron';
import './anchor-links.styles.css';

const AnchorLinks = (props) => {
	return (
		<a id='anchor-links'>
			{props.children}
			<span>
				<Chevron color='#6a148e' height='15' width='15' />
			</span>
		</a>
	);
};

export default AnchorLinks;
