import React from 'react';
import PropTypes from 'prop-types';

const SearchIcon = () => {
	return (
		<div style={{ width: 15, height: 15, padding: '1rem ', borderRight: '1px solid #dcdcef' }}>
			<img src='/search.svg' style={{ width: '100%' }} />
		</div>
	);
};

SearchIcon.propTypes = {};

export default SearchIcon;
