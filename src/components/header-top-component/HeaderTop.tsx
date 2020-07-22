import React from 'react';

import NavLink from '../nav-link-component/NavLink';
import BurgerMenu from '../shared/burger-menu-component/BurgerMenu';
import Logo from '../shared/logo-component/Logo';
import HeaderButton from '../shared/header-button-component/HeaderButton';

import './header-top.styles.css';

interface IHeaderTopProps {
  handleSideDrawerOpen: () => void;
}
const HeaderTop: React.FC<IHeaderTopProps> = ({ handleSideDrawerOpen }) => {
  return (
    <header className="main--header">
      <nav className="navbar">
        <div className="navbar--content">
          <Logo />
          <BurgerMenu handleSideDrawerOpen={handleSideDrawerOpen} />
          <ul className="navbar-customer-area">
            <HeaderButton content="My enquires" />
            <HeaderButton content="View my homes" />
            <HeaderButton content="Sign in" customStyle={true} />
          </ul>
        </div>
        <NavLink />
      </nav>
    </header>
  );
};

HeaderTop.propTypes = {};

export default HeaderTop;
