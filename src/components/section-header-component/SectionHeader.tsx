import React, { ReactNode } from 'react';
import './section-heading.styles.css';
import PropTypes from 'prop-types';

interface ISectionHeaderProps {
  children: ReactNode;
}
const SectionHeader: React.FC<ISectionHeaderProps> = ({ children }) => {
  return <div className="section-heading">{children}</div>;
};

export default SectionHeader;
