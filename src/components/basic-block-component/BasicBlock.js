import React from 'react';
import './basic.styles.css';

const BasicBlock = (props) => {
	return <div className='basic-block'>{props.children}</div>;
};

export default BasicBlock;
