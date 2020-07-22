import React, { ReactNode } from 'react';
import Chevron from '../../chevron-component/Chevron';
import './anchor-links.styles.css';

interface IAnchorLinksProps {
  children: ReactNode;
}
const AnchorLinks: React.FC<IAnchorLinksProps> = ({ children }) => {
  return (
    <a id="anchor-links">
      {children}
      <span>
        <Chevron color="#6a148e" height="15" width="15" />
      </span>
    </a>
  );
};

export default AnchorLinks;
