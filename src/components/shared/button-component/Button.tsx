import React from 'react';

import './button.styles.css';

interface IButtonProps {
  invert: boolean;
  content?: string;
}
const Button: React.FC<IButtonProps> = ({ invert, content }) => {
  return (
    <div className={invert ? 'default-btn invert' : ' default-btn normal'}>
      <a>{content}</a>
    </div>
  );
};

export default Button;
