import React from 'react';
import HeaderButton from '../shared/header-button-component/HeaderButton';
import './side-drawer.styles.css';
import SideBarLinks from '../shared/side-bar-links-component/SideBarLinks';
import UserArea from '../shared/user-area-component/UserArea';
import CloseButton from '../shared/close-button-component/CloseButton';

const SideDrawer = ({ hidden, handleSideDrawerOpen }) => {
  return (
    <div className={hidden ? 'side-drawer open' : 'side-drawer'}>
      <div className="side-drawer-content">
        <CloseButton handleSideDrawerOpen={handleSideDrawerOpen} />
        <div className="side-drawer-content-inner">
          <nav>
            <ul>
              <HeaderButton content="My enquiries" sidebarStyles={true} />
              <HeaderButton content="View my home" sidebarStyles={true} />
              <HeaderButton content="Sign in" sidebarStyles={true} />
            </ul>
            <UserArea />
          </nav>
          <SideBarLinks />
        </div>
      </div>
    </div>
  );
};

// SideDrawer.propTypes = {
// 	hidden: Boolean,
// };

export default SideDrawer;
