import React, { ReactNode } from 'react';

import './custom-tab.styles.css';

interface ICustomTabProps {
  children: ReactNode;
}
const CustomTab: React.FC<ICustomTabProps> = ({ children }) => {
  return (
    <React.Fragment>
      <ul className="header-tab">{children}</ul>
    </React.Fragment>
  );
};

export default CustomTab;
