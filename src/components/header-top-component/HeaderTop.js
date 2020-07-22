import React from 'react';

import NavLink from '../nav-link-component/NavLink.js';
import BurgerMenu from '../shared/burger-menu-component/BurgerMenu.js';
import Logo from '../shared/logo-component/Logo.js';
import HeaderButton from '../shared/header-button-component/HeaderButton.js';

import './header-top.styles.css';

const HeaderTop = ({ handleSideDrawerOpen }) => {
	return (
		<header className='main--header'>
			<nav className='navbar'>
				<div className='navbar--content'>
					<Logo />
					<BurgerMenu handleSideDrawerOpen={handleSideDrawerOpen} />
					<ul className='navbar-customer-area'>
						<HeaderButton content='My enquires' />
						<HeaderButton content='View my homes' />
						<HeaderButton content='Sign in' customStyle={true} />
					</ul>
				</div>
				<NavLink />
			</nav>
		</header>
	);
};

HeaderTop.propTypes = {};

export default HeaderTop;
