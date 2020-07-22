import React from 'react';
import './section-heading.styles.css';
import PropTypes from 'prop-types';

const SectionHeader = (props) => {
	return <div className='section-heading'>{props.children}</div>;
};

SectionHeader.propTypes = {};

export default SectionHeader;
