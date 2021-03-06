import React from 'react';
import './header-button.styles.css';

interface IHeaderButtonProps {
  content: string;
  customStyle?: boolean;
  sidebarStyles?: boolean;
}
const HeaderButton: React.FC<IHeaderButtonProps> = ({
  content,
  customStyle,
  sidebarStyles,
}) => {
  const stylesCustom = () => {
    if (customStyle) {
      return 'custom-style';
    } else if (!customStyle && !sidebarStyles) {
      return 'nav--items-top';
    } else if (sidebarStyles) {
      return 'side-bar-nav ';
    } else {
      return '';
    }
  };
  return (
    <li className={stylesCustom()}>
      <a href="/#">{content}</a>
    </li>
  );
};

export default HeaderButton;
