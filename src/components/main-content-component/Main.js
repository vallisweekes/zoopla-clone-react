import React from 'react';
import './main-content.styles.css';
const Main = (props) => {
	return <section className='main-content-container'>{props.children}</section>;
};

Main.propTypes = {};

export default Main;
