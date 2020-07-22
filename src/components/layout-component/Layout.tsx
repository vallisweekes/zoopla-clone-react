import React, { useState, ReactNode } from 'react';

import Footer from '../footer-component/Footer';

import HeaderTop from '../header-top-component/HeaderTop';
import SideDrawer from '../side-drawer-component/SideDrawer';

import './layout.styles.css';

interface ILayoutProps {
  children: ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const [hidden, setHidden] = useState(false);

  const handleSideDrawerOpen = () => {
    setHidden(!hidden);
  };
  return (
    <React.Fragment>
      <main className="page-wrapper">
        <HeaderTop handleSideDrawerOpen={handleSideDrawerOpen} />
        <SideDrawer
          hidden={hidden}
          handleSideDrawerOpen={handleSideDrawerOpen}
        />
        <section id="content-wrap">{children}</section>

        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Layout;
