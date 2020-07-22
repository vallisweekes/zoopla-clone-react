import React from 'react';
import './burger-menu.styles.css';

const BurgerMenu = ({ handleSideDrawerOpen }) => {
	return (
		<div className='burger-menu' onClick={handleSideDrawerOpen}>
			<svg height='25pt' viewBox='0 -53 384 384' width='25pt' xmlns='http://www.w3.org/2000/svg' fill='#ffffff'>
				<path d='m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' />
				<path d='m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' />
				<path d='m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' />
			</svg>
		</div>
	);
};

export default BurgerMenu;
