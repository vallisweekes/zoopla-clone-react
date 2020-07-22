import React, { ReactNode } from 'react';
import './main-content.styles.css';

interface IMainProps {
  children: ReactNode;
}
const Main: React.FC<IMainProps> = ({ children }) => {
  return <section className="main-content-container">{children}</section>;
};

Main.propTypes = {};

export default Main;
