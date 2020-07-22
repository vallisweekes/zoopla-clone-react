import React from 'react';
import './blog-block.styles.css';

import AnchorLinks from '../shared/anchor-links/AnchorLinks';

const BlogBlock = ({ heading, children }) => {
	return (
		<div id='blog-block'>
			<div className='blog-block-container'>
				<h3 className='section-heading'>{heading}</h3>
				{children}
				<AnchorLinks>All property news</AnchorLinks>
			</div>
		</div>
	);
};

BlogBlock.propTypes = {};

export default BlogBlock;
